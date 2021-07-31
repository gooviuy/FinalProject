import { Fragment } from "react";

const Node = () => {
  return (
    <Fragment>
      <h1>Node Js</h1> <br></br>
      <div>
        <h5>what is NPM?</h5>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault1"
            id="flexRadioDefault1"
          />
          <label class="form-check-label" for="flexRadioDefault1">
            Nuget Package Manager
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault1"
            id="flexRadioDefault1"
          />
          <label class="form-check-label" for="flexRadioDefault1">
            Package manager for the Javascript programming language
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault1"
            id="flexRadioDefault1"
          />
          <label class="form-check-label" for="flexRadioDefault1">
            Package manager for Node.js
          </label>
        </div>
      </div>
      <div>
        <h5>Does nodejs run on windows?</h5>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault2"
            id="flexRadioDefault2"
          />
          <label class="form-check-label" for="flexRadioDefault1">
            Yes
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault2"
            id="flexRadioDefault2"
          />
          <label class="form-check-label" for="flexRadioDefault1">
            No
          </label>
        </div>
      </div>
    </Fragment>
  );
};

export default Node;
