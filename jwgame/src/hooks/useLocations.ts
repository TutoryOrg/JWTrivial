import {useEffect, useState} from 'react';

interface ICountries {
    code: string;
    name: string;
}

export function useLocations(): ICountries[] {
    const [locations, setLocations] = useState<ICountries[]>([]);

    useEffect(() => {
        async function fetchLocations() {
            const res = await fetch('http://localhost:3001/locations/countries')
                .then(response => response.json())
                .then(obj => {
                    return obj.map(country => {
                        return {
                            code: country.code,
                            name: country.name,
                        };
                    });
                })
                .catch(error => {
                    setLocations([]);
                    throw error;
                });

            setLocations(res);
        }

        fetchLocations();
    }, []);

    return locations;
}
