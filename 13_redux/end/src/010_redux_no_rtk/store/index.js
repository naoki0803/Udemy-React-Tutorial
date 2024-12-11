import { createStore } from "redux";

const initialState = 0;
const reducer = (state = initialState, { type, step }) => {
    switch (type) {
      case "+":
        return state + step;
      case "-":
        return state - step;
      default:
        return state;
    }
  };

export default createStore(
    reducer
);