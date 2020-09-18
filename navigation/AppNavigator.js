
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {createStackNavigator} from '@react-navigation/stack';

import usersScreen from '../screens/usersScreen'
import profileScreen from '../screens/profileScreen'
import React from "react";


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const UsersStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Users" component={usersScreen}/>
        </Stack.Navigator>
    )
}
const ProfileStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={profileScreen}/>
        </Stack.Navigator>
    )
}

const AppNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Users" component={UsersStackNavigator}/>
            <Tab.Screen name="Profile" component={ProfileStackNavigator}/>
        </Tab.Navigator>
    )
}
export default AppNavigator
