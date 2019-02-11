import { USER_LOGGED_IN, USER_LOGGED_OUT } from './ActionsTypes'

export const login = user => {
    return {
        type: USER_LOGGED_IN,
        payLoad: user
    }
}

export const logout = () => {
    return {
        type: USER_LOGGED_OUT
    }
}