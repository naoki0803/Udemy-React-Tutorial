import { createSlice } from "@reduxjs/toolkit";

/** state がオブジェクトの場合の記述方法
 *
 * 本来オブジェクトの変更はimmutableに変更する必要があるが、
 * RTK を利用している場合、ミュータブルな記述であっても、内部で immutable な変更に自動的に買えてくれる
 *
 */
const counter = createSlice({
  name: "counter",
  // initialState: 0, // もとはオブジェクトではない
  initialState: { count: 0 }, // state をオブジェクトに変更する
  reducers: {
    add(state, { type, payload }) {

      /** immutability を保持した本来の記述方法
       * const newState = { ...state };
       * newState.count = state.count + payload;
      */

      // mutable な記述だが、RTKが自動的にimmutability を保持してくれる
      state.count = state.count + payload;
      // return state       // return は記述しない

      /** return を記述しない理由
       * RTK の reducer では、ミュータブルな変更を行う場合は return を記述しないのが推奨されています。
       * これは、以下の理由によります。
       * 
       * 1. 可読性の向上: return を記述しないことで、
       *    reducer が state を変更するだけのシンプルな関数であることが明確になります。
       * 
       * 2. Immer の効率的な動作: Immer は return がない場合、
       *    変更された部分だけを効率的に更新します。return を記述すると、
       *    Immer は return された state をそのまま採用するため、内部的な最適化が働かない可能性があります。
       */
      
    },
    minus(state, { type, payload }) {
      state.count = state.count - payload;
    },
  },
});

const { add, minus } = counter.actions;

export { add, minus };
export default counter.reducer;
