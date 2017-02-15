
function initialState() {
    return {
        messages: [{time: 0, text: "Welcome to kape chat!", id: "Admin"}],
        message: ""
    }
}

export function messageStore(state, action) {
    var previousState = (state ? state : initialState())
    let tempMessages
    switch (action.type) {
        case 'ADD_MESSAGE':
            tempMessages = state.messages.concat(action.message)
            return { messages: tempMessages }
        case 'GET_MESSAGES':
            console.log("Get messages")
            console.log(previousState.messages)
            return previousState.messages
        default:
            return previousState
    }
}