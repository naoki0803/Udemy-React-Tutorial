// modules フォルダにファイルごとの reducer を定義する事で、ファイルの整理ができる

import { createStore, combineReducers } from "redux";
import { reducer } from "./modules/counter";

// const initialState = 0;
// const reducer = (state = initialState, { type, step }) => {
//   console.log(type);
//   switch (type) {
//     case "counter/+":
//       return state + step;
//     case "counter/-":
//       return state - step;
//     default:
//       return state;
//   }
// };

const reducers = combineReducers({
  counter: reducer
});



export default createStore(reducers);