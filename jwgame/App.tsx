import React, {useState} from 'react';
import {Button} from 'react-native';
import {Amplify} from '@aws-amplify/core';
import {Authenticator, useAuthenticator} from '@aws-amplify/ui-react-native';
import awsExports from './src/aws-exports';
import {CognitoUser} from 'amazon-cognito-identity-js/enhance-rn.js';
import {listNotes} from './src/graphql/queries';
import {
    createNote as createNoteMutation,
    deleteNote as deleteNoteMutation,
} from './src/graphql/mutations';
import {API, Storage} from 'aws-amplify';

Amplify.configure(awsExports);

function SignOutButton() {
    const {signOut} = useAuthenticator();
    return <Button title="Sign Out" onPress={signOut} />;
}

function App() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        fetchNotes();
    }, []);

    async function fetchNotes() {
        const apiData = await API.graphql({query: listNotes});
        const notesFromAPI = apiData.data.listNotes.items;
        await Promise.all(
            notesFromAPI.map(async note => {
                if (note.image) {
                    const url = await Storage.get(note.name);
                    note.image = url;
                }
                return note;
            })
        );
        setNotes(notesFromAPI);
    }

    async function createNote(event) {
        event.preventDefault();
        const form = new FormData(event.target);
        const image = form.get('image');
        const data = {
            name: form.get('name'),
            description: form.get('description'),
            image: image.name,
        };
        if (!!data.image) await Storage.put(data.name, image);
        await API.graphql({
            query: createNoteMutation,
            variables: {input: data},
        });
        fetchNotes();
        event.target.reset();
    }

    async function deleteNote({id, name}) {
        const newNotes = notes.filter(note => note.id !== id);
        setNotes(newNotes);
        await Storage.remove(name);
        await API.graphql({
            query: deleteNoteMutation,
            variables: {input: {id}},
        });
    }
    return (
        <Authenticator.Provider>
            <Authenticator>
                <SignOutButton />
            </Authenticator>
        </Authenticator.Provider>
    );
}

export default App;
