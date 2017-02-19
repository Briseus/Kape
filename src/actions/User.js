import { UPDATE_USER } from './../constants/index'

export const updateUser = (userName) => {
    return {
        type: UPDATE_USER ,
        userName: userName
    }
}
