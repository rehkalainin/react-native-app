import React from 'react';
import AppNavigator from "./navigation/AppNavigator";
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux'
import mainStore from './redux/mainStore'


export default function App() {
    return (
        <Provider store={mainStore}>
            <NavigationContainer>
                <AppNavigator/>
            </NavigationContainer>
        </Provider>


    );
}

