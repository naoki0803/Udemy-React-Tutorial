import Counter from "./components/Counter";
import { Provider } from "react-redux";
import store from "./store"

// POINT redux-thunkの定義
// const thunkFunction = (payload) => {
//   return (dispatch, getState) => {
//     副作用処理  
//   }
// }
const Example = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default Example;
