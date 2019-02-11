import { createStore, combineReducers } from 'redux'
import UserReducer from './reducers/UserReducer'

const reducers = combineReducers({
    user: UserReducer,
})

const storeConfig = () => {
    return createStore(reducers)
}

export default storeConfig