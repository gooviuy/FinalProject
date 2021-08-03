import client from "../../controllers";
import topicController from "../../controllers/topicController";

export const types = {
  TOPIC_CHANGE: "TOPIC_CHANGE",
  TOPIC_REQUEST: "TOPIC_REQUEST",
  TOPIC_SUCCESS: "TOPIC_SUCCESS",
  TOPIC_FAILURE: "TOPIC_FAILURE",
};

export const topicChange = (payload) => {
  return { type: types.TOPIC_CHANGE, payload: payload };
};
const topicRequest = () => {
  return { type: types.TOPIC_REQUEST };
};
const topicSucccess = (topic) => {

  return { type: types.TOPIC_SUCCESS, payload: topic };
};
const topicFailure = () => {
  return { type: types.TOPIC_FAILURE };
};

export const topic = (payload) => async (dispatch) => {
  dispatch(topicRequest());
  try {
    const a = client;

    const result = await topicController.topic({topic:payload.selectedTopic});

const s = JSON.stringify(result.quiz)
;
const jsons = JSON.parse(result.quiz)
;
    dispatch(topicSucccess(jsons));
  } catch (err) {
    dispatch(topicFailure());
  }
};
