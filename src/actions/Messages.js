export const getMessages = (messages) => {
    return {
        type: 'GET_MESSAGES',
        messages: messages
    }
}

export const postMessage = (message) => {
    return {
        type: 'ADD_MESSAGE',
        message: message
    }
}

export function getAllMessages() {
    return function (dispatch, getState) {
        let state = getState();
        return dispatch(getMessages(state.messages))
    }
}