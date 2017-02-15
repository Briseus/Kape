import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { messageStore } from './../reducers/Messages'

export const store = createStore(messageStore, applyMiddleware(thunk))