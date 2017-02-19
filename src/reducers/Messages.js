import { ADD_MESSAGE } from './../constants/index'

function initialState() {
    return {
        messages: [{ time: new Date().valueOf(), text: "Welcome to kape chat!", id: "Admin", userId: "admin", userName: "admin" }],
    }
}

function messageStore(state, action) {
    var previousState = (state ? state : initialState())
    let tempMessages
    switch (action.type) {
        case ADD_MESSAGE:
            tempMessages = state.messages.concat(action.message)
            return { messages: tempMessages }
        default:
            return previousState
    }
}

export default messageStore