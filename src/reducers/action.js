import { ADD_USER } from "./actionTypes";

export const addUser = (data = {}) => {
  console.log("data", data)
  return {
    type: ADD_USER,
    data: data
  };
};
