import React from "react";
//import { getUser, removeUserSession } from './Utils/Common';

const Landing = () => {
  //const user = getUser();

  // handle click event of logout button
  // const handleLogout = (props) => {
  //   removeUserSession();
  //   props.history.push("/login");

  //const [selectTopic, setTopic] = useState("");

  return (
    <form>
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
        <select className="form-select" id="inputGroupSelect01">
          <option value=""></option>
          <option value="1">Music</option>
          <option value="2">History</option>
          <option value="3">Football</option>
        </select>
        <input type='submit' className="btn btn-primary" value='Submit' />
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
