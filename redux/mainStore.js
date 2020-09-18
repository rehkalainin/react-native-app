import Store from './Store'
import usersPageReducer from "./redusers/userPageReducer";
import thunk from 'redux-thunk'


const reducers = {
    usersPage: usersPageReducer,
}
const middlewares = [thunk]

export const mainStore = new Store(reducers, middlewares)

export default mainStore.init()