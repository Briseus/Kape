import {combineReducers} from 'redux'
import messageStore from './Messages'
import userStore from './User'

const rootReducer = combineReducers({
    messageStore,
    userStore
})

export default rootReducer