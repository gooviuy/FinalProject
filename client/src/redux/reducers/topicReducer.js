import * as topicActions from "../actions/topicActions";

export default function topicReducer(state = {}, action) {
  switch (action.type) {
    case topicActions.types.TOPIC_CHANGE:
      return { ...state,...action.payload };
      case topicActions.types.TOPIC_SUCCESS:
        return {...state,topic:action.payload}
    default:
        return {}

  }
}
