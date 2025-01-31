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



/** Q: RTKを利用していますが、immerのproduce関数を記述していないのに、add()でイミュータビリティが保持されるのはなぜですか？
 * 
 * 
 * A: createSlice は内部で Immer を使用しているため、add 関数内で produce 関数を明示的に記述しなくてもイミュータビリティが保持されます。
 * Redux Toolkit (RTK) の createSlice は、reducer の中で state を直接変更するようなミュータブルな記述をしても、内部で Immer を使ってイミュータブルな更新に変換してくれます。
 * 具体的には、createSlice は以下のような処理を行っています。
 * reducer の実行: add や minus のような reducer 関数が実行される際、createSlice は Immer の produce 関数を使って、現在の state のコピー（draft）を作成します。
 * 2. draft の変更: reducer 関数内では、この draft を直接変更します。例えば、state.count = state.count + payload; のように記述します。
 * 新しい state の生成: reducer 関数の処理が完了すると、Immer は draft の変更を検知し、変更された部分だけを反映した新しい state を生成します。
 * state の更新: createSlice は、この新しい state を Redux ストアに反映させます。
 * この仕組みにより、reducer 内ではミュータブルなコードを記述しても、実際にはイミュータブルな更新が行われるため、Redux の原則である「state はイミュータブルであるべき」というルールが守られます。
 * したがって、add 関数内で produce 関数を明示的に記述する必要はありません。createSlice が内部で Immer を使用しているため、ミュータブルな記述でもイミュータブルな更新が自動的に行われます。
 * 
 * 
 */

const { add, minus } = counter.actions;

export { add, minus };
export default counter.reducer;
