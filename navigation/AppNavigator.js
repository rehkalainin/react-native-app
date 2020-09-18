import {createStackNavigator} from '@react-navigation/stack';
import usersScreen from '../screens/usersScreen'
import profileScreen from '../screens/profileScreen'
import React from "react";

const Stack = createStackNavigator();

export const AppNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Users" component={usersScreen}/>
            <Stack.Screen name="Profile" component={profileScreen}/>
        </Stack.Navigator>
    )
}
export default AppNavigator

