import React from "react"
import {applyMiddleware, combineReducers, createStore} from 'redux'


class Store {
    store

    constructor(reducers, middlewares) {
        this.reducers = reducers
        this.middlewares = middlewares
    }

    init() {
        this.store = createStore(combineReducers(this.reducers), applyMiddleware(...this.middlewares))
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
