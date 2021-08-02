import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//components
import Login from "./components/screens/Login/index";
import Register from "./components/general/Register";
import Home from "./components/screens/Home";
import Landing from "./components/screens/Landing";
import Music from "./components/screens/Quiz/Music";
import Node from "./components/screens/Quiz/Node";
import Sports from "./components/screens/Quiz/Sports";
import Result from "./components/screens/Results";
import { useSelector } from "react-redux";

function App() {
 return (
    <Router>
      <Route exact path="/" component={Home} />
      <section className="container">
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/landing" component={Landing} />
          <Route exact path="/music" component={Music} />
          <Route exact path="/node" component={Node} />
          <Route exact path="/sports" component={Sports} />
          <Route exact path="/results" components={Result} />
        </Switch>
      </section>
    </Router>
  );
}

export default App;
