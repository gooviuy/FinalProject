import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//components
import Login from "./components/screens/Login/index";
import Register from "./components/general/Register";
import Home from "./components/screens/Home";
import Landing from "./components/screens/Landing";
import Quiz from "./components/screens/Quiz";


function App() {
  debugger;
 return (
    <Router>
      <Route exact path="/" component={Home} />
        <Switch> 
      <Route  path="/quiz" ><Quiz /></Route>
      <Route  path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route  path="/landing" component={Landing} />
        </Switch>
    </Router>
  );
}

export default App;
