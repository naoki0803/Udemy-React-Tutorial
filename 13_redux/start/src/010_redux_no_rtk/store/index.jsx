import { createStore } from "redux"; // react tool kit 推奨の為取り消し線が入る

const initialState = 0;
const reducer = (state = initialState, { type, step }) => {
    switch (type) {
        case "+":
            return state + step;
        case "-":
            return state - step;
        default:
            // redux の場合 throw は利用せず、return で state を返す
            return state;
        // throw new Error("不明なactionです。");
    }
};

export default createStore(reducer);
