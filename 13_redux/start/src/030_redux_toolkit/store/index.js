// import { createStore, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
// import { reducer } from "./modules/counter";
import reducer from "./modules/counter";


/** reduxの場合の記述
 * 複数の reducer を登録する為に、
 * combineReducers() の引数に登録したい reducer をオブジェクトで渡す
 */
// const reducers = combineReducers({
//   counter: reducer,
//   counter2: reducer2,
// });
// export default createStore(reducers);


/** reduxToolKit (移行RTK) の場合
 * はじめから複数のreducerを渡す設計になっており、
 * configureStore の引数にオブジェクトとして reducer を渡し、
 * その値にさらにオブジェクトとして、複数の reducer を記述する
 * 
 * 実際に reducer を定義する場合、RTK の createSlice を利用する
 * * import { createSlice } from '@reduxjs/toolkit'
*/
// 
export default configureStore({
  reducer: {
    counter: reducer
  }
})
