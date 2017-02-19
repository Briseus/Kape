import { ADD_MESSAGE } from './../constants/index'

export const postMessage = (message) => {
    return {
        type: ADD_MESSAGE,
        message: message
    }
}
