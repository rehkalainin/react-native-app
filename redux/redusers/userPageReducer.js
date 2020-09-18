import React from "react"
import * as usersApi from "../../api/usersApi"

const SET_USERS = 'SET_USERS'
const SET_IS_LOADING = 'SET_IS_LOADING'

const initialState = {
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
