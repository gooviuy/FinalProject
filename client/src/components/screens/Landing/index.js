
import {useState} from "react";
import { getUser, removeUserSession } from './Utils/Common';

const Topic = () => {

  const user = getUser();


  // handle click event of logout button
  const handleLogout = (props) => {    
    removeUserSession();
    props.history.push('/login');
  }

const [selectTopic, setTopic] = useState("");

return (
  <form>
<div>
  Choose a topic to start the Quiz! <br /><br />
  <input></input>
</div>
<div>
    There is always time to come back !<br /><br />
    <input type="button" onClick={handleLogout} value="Logout" />
</div>

  </form>
);
};

export default Topic;
