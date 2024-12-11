import Counter from "./components/Counter";
import { Provider } from "react-redux";
import store from "./store"

// Redux Middleware
const reduxMiddleware = (store) => {
  return (next) => {
    return (action) => {
      // 全てのdispatchで行われる処理
      // storeはaction前の状態
      // （store.getState()でステートを取得）
      next(action);
      // storeはaction後の状態
    };
  }
}
const Example = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default Example;
