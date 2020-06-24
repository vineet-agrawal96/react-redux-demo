import { combineReducers } from "redux";
import { ADD_USER } from "./actionTypes";

const intialState = {
  users: [],
  count : 0,
  selectedUser:0
};

const reducers = (state = intialState, action) => {
  let { count, users } = state 
  switch (action.type) {
    case ADD_USER:
      console.log("ADD_USER====>", action)
      
      users = [...users, { ...action.data , id:count+1}]
      return {...state, users, count : count+1 };

    default:
      return state;
  }
};

// const rootReducers = combineReducers({
//   reducers
// });

export default reducers;
