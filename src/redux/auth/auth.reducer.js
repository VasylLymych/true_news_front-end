import {SET_IS_AUTH_TRUE, SET_IS_AUTH_FALSE} from "./auth.types";

const initialState = {
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_AUTH_TRUE: {
            return {...state, isAuth: true}
        }
        case SET_IS_AUTH_FALSE: {
            return {...state, isAuth: false}
        }
        default: {
            return state
        }
    }
}

export default authReducer