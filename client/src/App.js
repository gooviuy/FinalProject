import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//components
import Login from "./components/screens/Login/index"
import Register from "./components/general/Register";
import Home from "./components/screens/Home"

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <section className="container">
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </section>
    </Router>
  );
}

export default App;
