import { createStore, combineReducers } from 'redux'
import githubReducer from './reducers/githubReducer'

const rootReducer = combineReducers({
    githubReducer
})

const store = createStore(rootReducer)


export default store