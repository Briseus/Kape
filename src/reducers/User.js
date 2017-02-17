import shortid from 'shortid'

function initialState() {
    return {
        user: {
            id: shortid.generate(),
            name: "Anon"
        }
    }
}

function userStore(state, action) {
    const previousState = (state ? state : initialState())
    
    switch (action.type) {
        case 'UPDATE_USER':
            return action.user
        default:
            return previousState
    }
}

export default userStore