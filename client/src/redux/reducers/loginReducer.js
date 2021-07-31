
import * as loginActions from "../actions/loginActions"

export default function loginReducer(state = {}, action) {
    switch(action.type){
        case loginActions.types.LOGIN_CHANGE:
            return {...state,...action.payload}
        default:
            return {}
    }
   }