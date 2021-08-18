import * as topicActions from "../actions/topicActions";

export default function topicReducer(state = { loading: false }, action) {
  switch (action.type) {
    case topicActions.types.TOPIC_CHANGE:
      return { ...state, ...action.payload };
    case topicActions.types.TOPIC_REQUEST:
      return { ...state, loading: true };
    case topicActions.types.TOPIC_SUCCESS:
      return { ...state, topic: action.payload, loading: false };

    default:
      return {};
  }
}
