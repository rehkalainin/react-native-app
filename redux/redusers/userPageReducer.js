import React from "react"
import * as usersApi from "../../api/usersApi"


const SET_USERS = 'SET_USERS'
const SET_IS_LOADING = 'SET_IS_LOADING'

const initialState = {
    // users: [
    //     {
    //         id: 1,
    //         name: "Kostya",
    //         description: "My description",
    //         photo: "https://s8.cdn.teleprogramma.pro/wp-content/uploads/2020/01/e187d44f997b399185adaf352cc17b83.jpg",
    //     },
    //     {
    //         id: 2,
    //         name: "Sasha",
    //         description: "My description",
    //         photo: "https://s8.cdn.teleprogramma.pro/wp-content/uploads/2020/01/e187d44f997b399185adaf352cc17b83.jpg",
    //     },
    //     {
    //         id: 3,
    //         name: "Natasha",
    //         description: "My description",
    //         photo: "https://s8.cdn.teleprogramma.pro/wp-content/uploads/2020/01/e187d44f997b399185adaf352cc17b83.jpg",
    //     },
    // ],
    users:[],
    isLoading: false,
}
const usersPageReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USERS:
            return {...state, users: action.res}
        case SET_IS_LOADING:
            return {...state, isLoading: action.isLoading}
        default:
            return state
    }
}

export const setUsers = (res) => {
    return {type: SET_USERS, res}
}

export const setIsLoading = (isLoading) => {
    return {type: SET_IS_LOADING, isLoading}
}


export const loadUsers = () => {
    return async (dispatch) => {
        dispatch(setIsLoading(true))
        const res = await usersApi.loadUsers()
        console.log(res)
        dispatch(setIsLoading(false))
        dispatch(setUsers(res))
    }
}

export default usersPageReducer
