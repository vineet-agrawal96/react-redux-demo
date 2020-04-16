import React from "react";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { testAction } from "./reducers/action";
export default function App() {
  const dispatch = useDispatch();
  const test = useSelector(state => state.reducers);
  return (
    <div className="App">
      <h1>{test.test}</h1>

      <button onClick={() => dispatch(testAction("Title test"))}>CLick on me</button>
    </div>
  );
}
