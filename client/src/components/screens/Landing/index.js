import { useState } from "react";
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
        Choose a topic to start the Quiz! <br />
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
      </div>
      <div>
        <br />
        There is always time to come back !
        <br />
        <input type="button" value="Logout" />
      </div>
    </form>
  );
};
//<input type="button" onClick={handleLogout} value="Logout" />
//};
export default Landing;
