import React, {useEffect} from "react"
import {Image, StyleSheet, Text, View} from "react-native";
import {useSelector, useDispatch} from "react-redux"
import {loadUsers} from "../redux/redusers/userPageReducer"
import {getIsLoading, getUsers} from "../redux/selectors/userPageSelectors"
import Card from './uikit/Card'
import Preloader from "./Preloader";


const Users = () => {
    const dispatch = useDispatch()
    const users = useSelector(getUsers)
    const isLoading = useSelector(getIsLoading)
    useEffect(() => {
        dispatch(loadUsers())
    }, [])


    return (
        <View>
            {isLoading ? <Preloader/>
                : users.map(user => <Card key={user.id}
                                          title={user.user.name}
                                          imageUri={user.user.profile_image.medium}
                                          description={user.alt_description}
                                          id={user.id}/>)}
        </View>
    )
}

export default Users