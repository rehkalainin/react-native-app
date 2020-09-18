import React, {useEffect} from "react"
import {Image, StyleSheet, Text, View} from "react-native";
import {useSelector, useDispatch} from "react-redux"
import {loadUsers} from "../redux/redusers/userPageReducer"
import {getUsers} from "../redux/selectors/userPageSelectors"
import Card from './uikit/Card'


const Users = () => {
    const dispatch = useDispatch()
    const users = useSelector(getUsers)
    useEffect(() => {
        dispatch(loadUsers())
    }, [])


    return (
        <View>
            {users.map(user => <Card key={user.id}
                                     title={user.user.name}
                                     imageUri={user.user.profile_image.medium}
                                     description={user.alt_description}/>)}
        </View>
    )
}

export default Users