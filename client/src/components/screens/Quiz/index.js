import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as topicActions from "../../../redux/actions/topicActions";
//import { getUser, removeUserSession } from './Utils/Common';

//conseguir qe la info llegue al backend

const Quiz = () => {
  const quiz = useSelector((state) => state.topic.topic);
  const selectedQuiz = Object.keys(quiz)[0];
  const questions = Object.keys(quiz[selectedQuiz]).map(
    (key) => quiz[selectedQuiz][key].question
  );

  return (
    <>
      <div style={{ alignItems: "center", display: "flex", flexDirection: "column" }}>{selectedQuiz} Quiz</div>
      <div style={{ alignItems: "center", display: "flex", flexDirection: "column" }}>
        {questions.map((question) => (
          <>
           
            <label>{question}</label>
          </>
        ))}
      </div>
    </>
  );
};
//<input type="button" onClick={handleLogout} value="Logout" />
//};
export default Quiz;
