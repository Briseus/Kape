import { UPDATE_USER } from './../constants/index'
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
    let newUser
    switch (action.type) {
        case UPDATE_USER:
            console.log(action.userName)
            newUser = {
                id: previousState.user.id,
                name: action.userName
            }
            return { user: newUser }
        default:
            return previousState
    }
}

export default userStore