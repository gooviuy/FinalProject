import "./App.css";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

//components
import Login from "./components/screens/Login/index";
import Register from "./components/general/Register";
import Home from "./components/screens/Home";
import Landing from "./components/screens/Landing";
import Quiz from "./components/screens/Quiz";
import { useSelector } from "react-redux";


const PrivateRoute = ({component: Component, ...rest}) => {
const isLogged  = useSelector(state => state.login.user)
debugger;

return  <Route {...rest} render={props => (
  isLogged ?
      <Component {...props} />
  : <Redirect to="/login" />
)} />

}
function App() {
  debugger;
 return (
    <Router>
      <Route exact path="/" component={Home} />
        <Switch> 
      <PrivateRoute  path="/quiz"  component={Quiz}/>
      <Route  path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <PrivateRoute  path="/landing" component={Landing} />
        </Switch>
    </Router>
  );
}

export default App;
