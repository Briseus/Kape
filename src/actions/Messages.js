import { ADD_MESSAGE, CLEAR_MESSAGES } from './../constants/index'

export const postMessage = (message) => {
    return {
        type: ADD_MESSAGE,
        message: message
    }
}

export const clearMessages = () => {
    return {
        type: CLEAR_MESSAGES
    }
}