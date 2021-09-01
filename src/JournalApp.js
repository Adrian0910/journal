import React from 'react'
import { AppRouter } from './routers/AppRouter'

// Provider is a react component that allows us to access the store
import {Provider} from 'react-redux';
import { store } from './store/store';

export const JournalApp = () => {
    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    )
}
