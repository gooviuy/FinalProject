import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as topicActions from "../../../redux/actions/topicActions"
//import { getUser, removeUserSession } from './Utils/Common';

//conseguir qe la info llegue al backend

const Landing = () => {
  //const user = getUser();

  const {selectedTopic} = useSelector(state => state.topic);
  const dispatch = useDispatch();
  const onChange = (e) => {
   // debugger
    dispatch(topicActions.topicChange({ selectedTopic: e.target.value }));
  };

const onClick = (e) => {
  e.preventDefault()
  debugger
  dispatch(topicActions.topic({ selectedTopic }));
}

  // handle click event of logout button
  // const handleLogout = (props) => {
  //   removeUserSession();
  //   props.history.push("/login");

  //const [selectTopic, setTopic] = useState("");

  return (
    <form >
      <div>
        <h1 className="large text-primary">
          {" "}
          Choose a topic to start the Quiz!{" "}
        </h1>{" "}
        <br />
      </div>
      <div className="input-group mb-3">
        <label className="input-group-text" for="inputGroupSelect01">
          Topics
        </label>
        <select onChange={onChange} value={selectedTopic} className="form-select" id="inputGroupSelect01">
          <option value=""></option>
          <option value="Music">Music</option>
          <option value="History">History</option>
          <option value="Football">Football</option>
        </select>
        <button  onClick={onClick} className="btn btn-primary">
          Submit
        </button>
      </div>
      <div>
        <br />
        <h4 className="my-2"> There is always time to come back!</h4>

        <input type="button" className='btn btn-dark my-1'  value="Logout" />
      </div>
    </form>
  );
};
//<input type="button" onClick={handleLogout} value="Logout" />
//};
export default Landing;
