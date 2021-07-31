import { Fragment } from "react";

const Result = () => {
  return (
    <Fragment>
      <div>
        <h1>Your Score is: </h1>
      </div>
      <div>
        <button className="btn btn-primary">Start Again</button>
      </div>
      <div>
        <button className="btn btn-dark my-1">Logout</button>
      </div>
    </Fragment>
  );
};

export default Result;
