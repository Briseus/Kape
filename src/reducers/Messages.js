
function initialState() {
    return {
        messages: [{time: new Date().valueOf(), text: "Welcome to kape chat!", id: "Admin", userId: "admin", userName: "admin"}],
        message: ""
    }
}

function messageStore(state, action) {
    var previousState = (state ? state : initialState())
    let tempMessages
    switch (action.type) {
        case 'ADD_MESSAGE':
            tempMessages = state.messages.concat(action.message)
            return { messages: tempMessages }
        case 'GET_MESSAGES':
            return previousState.messages
        default:
            return previousState
    }
}

export default messageStore