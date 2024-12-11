// POINT 素のReduxでグローバルな状態管理を記述してみよう
import Counter from "./components/Counter";
import { Provider } from "react-redux";
import store from "./store"

const Example = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default Example;
