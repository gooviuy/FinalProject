//import client from "../../controllers";
import topicController from "../../controllers/topicController";

export const types = {
  TOPIC_CHANGE: "TOPIC_CHANGE",
  TOPIC_REQUEST: "TOPIC_REQUEST",
  LOADING: "LOADING",
  LOADED: "LOADED",
  TOPIC_SUCCESS: "TOPIC_SUCCESS",
  TOPIC_FAILURE: "TOPIC_FAILURE",
  
};

export const topicChange = (payload) => {
  return { type: types.TOPIC_CHANGE, payload: payload };
};
const topicRequest = () => {
  return { type: types.TOPIC_REQUEST };
};

//const loading =() => {
  //return {type: types.LOADING}
//} 
//const loaded = () => {
  //return {type: types.LOADED}
//}
 

const topicSucccess = (topic) => {

  return { type: types.TOPIC_SUCCESS, payload: topic };
};
const topicFailure = () => {
  return { type: types.TOPIC_FAILURE };
};

export const topic = (payload) => async (dispatch) => {
  dispatch(topicRequest());
  //dispatch(loading)
  try {
    //const a = client;

    const result = await topicController.topic({topic:payload.selectedTopic});

//const s = JSON.stringify(result.quiz)
;
const jsons = JSON.parse(result.quiz)
;
    dispatch(topicSucccess(jsons));
   // dispatch(loaded)
  } catch (err) {
    dispatch(topicFailure());
  }
};
