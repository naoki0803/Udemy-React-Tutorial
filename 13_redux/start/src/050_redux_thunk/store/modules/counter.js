import { createSlice } from "@reduxjs/toolkit";
import { asyncCount } from "../../api/counter";

const counter = createSlice({
    name: "counter",
    initialState: {
        count: 0,
    },
    reducers: {
        add(state, { type, payload }) {
            state.count = state.count + payload;
            // const newState = { ...state };
            // newState.count = state.count + payload
            // return newState;
        },
        minus(state, { type, payload }) {
            state.count = state.count - payload;
            // const newState = { ...state };
            // newState.count = state.count - payload
            // return newState;
        },
    },
});

const { add, minus } = counter.actions;

/** redux-thunkの定義
  const thunkFunction = (payload) => {
    return (dispatch, getState) => {
      副作用処理  
    }
  }

  redux-thunkは戻り値に関数を返す
  第一引数に、dispatch  
  第に引数に、getState

  関数内の処理で非同期などの副作用を伴う処理を記述し、
  その結果を第一引数の dispatch で値を更新する処理を行う。

  原則として、redux内の reducer 関数内で非同期処理などを行うことは、
  関数の純粋制を損なうため記述できない。

  そのため、middleware として redux-thunk を用いて非同期処理などの副作用を記述する必要がある。
  ※middleware内では副作用を伴う処理を記述してOK

*/
const addAsync = (payload) => {
    return async (dispatch, getState) => {
        // const state = getState();
        // console.log("🚀 ~ return ~ state:", state.counter.count);

        const response = await asyncCount(payload);
        dispatch(add(response.data));
    };
};
export { add, minus, addAsync };
export default counter.reducer;
