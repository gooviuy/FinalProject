
import * as loginActions from "../actions/loginActions"

export default function loginReducer(state = { user:null, error:false}, action) {
    switch(action.type){
        case loginActions.types.LOGIN_CHANGE:
            return {...state,...action.payload}
        case loginActions.types.LOGIN_SUCCESS:
            return {...state,user:action.payload, error:false}
        case loginActions.types.LOGIN_FAILURE:
                return {...state,errorMessage:action.payload.message, error:true}
     case loginActions.types.LOGOUT:
    return {...state, user:null, error:false}
        default:
            return {...state}
    }
   }