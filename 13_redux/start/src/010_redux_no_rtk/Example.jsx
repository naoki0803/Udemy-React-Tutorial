import Counter from "./components/Counter";
import { CounterProvider } from "./context/CounterContext";
import { Provider } from "react-redux";
import store from "./store";

/** redux の利用方法
 * 1. react-redux から、{Provider} を import する
 * 2. Provider に props として、 store を渡す  ※ useContext の場合は value で記述している。
 * 3. store フォルダに index.jsx を作成する
 * 4. 3.で作成したindex.jsxに、default export createStore() を記述して、引数に reducer を記述する
 * 5_1. 参照: const state = useSelector((state) => state);  ※ コールバック関数を記述する
 * 5_2  更新: const dispatch = useDispatch();               ※ シンプルにdispatch に更新関数が入ってくる
 */

const Example = () => {
    return (
        // redux で記述した場合
        <Provider store={store}>
            <Counter />
        </Provider>

        // useContext で作成した場合
        // <CounterProvider>
        //   <Counter />
        // </CounterProvider>
    );
};

export default Example;
