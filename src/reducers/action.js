import { TEST_ACTION } from "./actionTypes";

export const testAction = (data = {}) => {
  return {
    type: TEST_ACTION,
    data: data
  };
};
