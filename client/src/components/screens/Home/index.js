import { Fragment } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Fragment>
      <section>
        <div>
          <h1>Welcome to the QUIZ GENERATOR</h1>
        </div>
        <div>
          <Link to="/register">Sign Up</Link>
          <Link to="/login">Login</Link>
        </div>
      </section>
      
    </Fragment>
  );
};

export default Home;
