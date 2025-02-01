## 各ファイルで redux の処理を記述している箇所

### /store/index.js

-   `configureStore()` を実行して store を作成する

### /Example.jsx

-   `import store from "./store";` と記述して、 `./store/index.js` を読み込む
-   `Provider` コンポーネントに `store={store}` で props 渡す

### /store/modules/counter.js

#### 基本的な内容

-   `createSlice()` で store 内に slice 単位で以下を 3 つを定義する

    1.  state
    2.  reducer
    3.  action creator

-   `createSlice()` で生成された `actions` から、action creator を分割代入で取得する。例: `{ add, minus } = counter.actions;`
-   `createSlice()` で生成された `reducer` を `export default` する。例: `export default counter.reducer;`

#### 副作用を伴う処理で、middleware を記述する場合

-   RTK から `createAsyncThunk` を import する
-   副作用を伴う非同期処理は、`createAsyncThunk()` 内で定義する。
-   `createAsyncThunk()` が生成するアクション (`pending`, `fulfilled`, `rejected`) を `extraReducers` 内で listen し、state を更新する。

### /components/Counter.jsx

-   `useSelector()` で、現在の `state.counter.status` を取得し、画面に表示する。
    ※`createSlice` 内の `initialState` で定義した内容が、`state.counter.count` や `state.counter.status` として取得できる。

    ```
    initialState: {
        count: 0,
        status: "",
    },
    ```

-   `<CounterButton>` の props で `step=({2})` と、`actionCreator={add || minus || addAsyncWithStatus }` を渡す

### /components/CounterButton.jsx

-   `const dispatch = useDispatch();` で更新関数を取得する
-   props で渡された `actionCreator` を利用して、アクションを生成し、`dispatch` する。
-   `dispatch(actionCreator(payload))` を実行することで、対応する reducer または `extraReducers` 内の処理が実行される。
