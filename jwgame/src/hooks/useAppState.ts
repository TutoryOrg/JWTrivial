import {useLayoutEffect, useState} from 'react';
import {loadState, saveState} from 'store/async';
import {rootReducer, emptyStore} from 'store/redux';
import {configureStore, Store} from '@reduxjs/toolkit';

export function useAppState(): Store {
    const [store, setStore] = useState<Store>(emptyStore);

    useLayoutEffect(() => {
        const fn = async () => {
            const localStorage = await loadState();
            if (localStorage) {
                const storeWithLocalStorage = configureStore({
                    reducer: rootReducer,
                    preloadedState: localStorage,
                });
                setStore(storeWithLocalStorage);
            }
        };
        fn();
    }, []);

    store.subscribe(() => saveState(store.getState()));

    return store;
}