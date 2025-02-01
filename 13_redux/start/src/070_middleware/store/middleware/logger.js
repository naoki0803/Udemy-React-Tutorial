// Redux Middleware の定義雛形
// const reduxMiddleware = (store) => {
//     return (next) => {
//         return (action) => {
//             // 全てのdispatchで行われる処理
//             // storeはaction前の状態
//             // （store.getState()でステートを取得）
//             next(action);
//             // storeはaction後の状態
//         };
//     };
// };

// Redux Middleware
const logger = (store) => {
    return (next) => {
        return (action) => {
            console.log(store.getState()); // storeはaction前の状態
            next(action);
            console.log(store.getState()); // storeはaction後の状態
        };
    };
};

export default logger;
