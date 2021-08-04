import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as topicActions from "../../../redux/actions/topicActions"
//import { getUser, removeUserSession } from './Utils/Common';

//conseguir qe la info llegue al backend

const Quiz = () => {
  const quiz = useSelector(state => state.topic.topic)
  const [userAnswers,setAnswer] = useState({})
  const [showAnswer, setShowAnswer] = useState(false)

debugger;
const selectedQuiz  = Object.keys(quiz)[0];
const questions = Object.keys(quiz[selectedQuiz]).map(key => quiz[selectedQuiz][key]);

debugger;
const selectAnswer = (question,option) => {
setAnswer({...userAnswers, [question]:option})
setShowAnswer(false)
}

const checkAnswers = () => {
setShowAnswer(true)
}
return <><div>{selectedQuiz} Quiz</div>
<div style={{display:"flex", flexDirection:"column"}}>
  {questions.map(({question, options,answer}) => <>
  <h1>{question}</h1>
  <div>
    {options.map(option => <div style={{display:"flex", flexDirection:"row"}}>
      <div 
      style={{width:"12px", height:"12px", border:"1px solid blue", backgroundColor:option == userAnswers[question] ? ( showAnswer ? (option.trim()==answer.trim() ? "green" : "red" ): "blue") : "white"}} 
      onClick={() => selectAnswer(question,option )}/>{option}</div>)}
  </div>
 
  </>)}</div>
  <div onClick={checkAnswers} style={{ width:"200px", height:"40px", backgroundColor:"blue"}}>Check Answers</div>
  </>
};
//<input type="button" onClick={handleLogout} value="Logout" />
//};
export default Quiz;
