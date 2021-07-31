import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Welcome to the QUIZ GENERATOR</h1>
          <p className="lead">
            Try your skills, and confirm your knowledge about general topics
          </p>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary">
              Sign Up
            </Link>
            <Link to="/login" className="btn btn-light">
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
