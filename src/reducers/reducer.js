import { combineReducers } from "redux";
import { TEST_ACTION } from "./actionTypes";

const intialState = {
  test: ""
};

const reducers = (state = intialState, action) => {
  switch (action.type) {
    case TEST_ACTION:
      state = { ...state, test: action.data };
      return state;

    default:
      return state;
  }
};

const rootReducers = combineReducers({
  reducers
});

export default rootReducers;
