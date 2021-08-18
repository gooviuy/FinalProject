import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import Login from "../components/screens/Login";

it("searching instances of login", () => {
  const wrapped = shallow(<App />);
  expect(wrapped.find(Login).length).toEqual(1);
});
