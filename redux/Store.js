import React from "react"
import {applyMiddleware, combineReducers, createStore} from 'redux'

import thunk from 'redux-thunk'


class Store {
    store

    constructor(reducers, middlewares) {
        this.reducers = reducers
        this.middlewares = middlewares
    }

    init() {
        this.store = createStore(combineReducers(this.reducers), applyMiddleware(thunk))
        return this.store
    }

    get dispatch() {
        return this.store.dispatch
    }

    get state() {
        return this.store.getState()
    }
}

export default Store
