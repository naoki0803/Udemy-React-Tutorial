import { createSlice } from "@reduxjs/toolkit";

/** RTK を用いて reducer を定義する
 * 1. createSlice をimportする
 * 2. createSliceの引数にオブジェクトを定義し、変数に代入する
 *    name:hoge         ※configureStore内で reducer のオブジェクトにわたすプロパティ名になる
 *    initialState: 0   ※state の初期値
 *    reducers:{}       ※更新する為の`関数`を記述する
 * 3. 2で代入した変数のactionsプロパティから、reducers:{} 内で記述した更新関数を、分割代入で取得する
 *    ※actions プロパティ (ActionCreator) は TRK の場合自動で作成される
 */

const counter = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    add(state, { type, payload } /* actionから分割代入で取得している */) {
      return state + payload;
    },
    minus(state, { type, payload }) {
      return state - payload;
    },
  },
});

const { add, minus } = counter.actions;


/** redux で reducer を定義する
 *  1. reducer を定義
 *  2. actionCreator を記述する
 */
// const initialState = 0;
// const reducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case "counter/+":
//       return state + payload;
//     case "counter/-":
//       return state - payload;
//     default:
//       return state;
//   }
// };

// const add = (payload) => {
//   return {
//     type: "counter/+",
//     payload,
//   };
// };

// const minus = (payload) => {
//   return {
//     type: "counter/-",
//     payload,
//   };
// };

export { add, minus };
export default counter.reducer;
