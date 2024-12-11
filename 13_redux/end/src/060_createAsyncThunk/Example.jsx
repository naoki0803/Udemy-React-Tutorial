// POINT [createAsyncThunk]非同期処理のステータスを画面に表示
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
