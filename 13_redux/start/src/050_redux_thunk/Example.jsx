import Counter from "./components/Counter";
import { Provider } from "react-redux";
import store from "./store";

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

const Example = () => {
    return (
        <Provider store={store}>
            <Counter />
        </Provider>
    );
};

export default Example;
