import Input from "./components/Input";

const CALC_OPTIONS = ["add", "minus", "divide", "multiply"];

const Example = () => {
    return (
        /* 完成系のJSX */
        // <CalcProvider>
        //   <Input name="a"/>
        //   <Input name="b" />
        //   <Select />
        //   <Result />
        // </CalcProvider>
        <>
            {/* <h3>練習問題</h3>
            <p>
                Example内のコードをコンポーネントに分割してください。また、ステートはContext経由でやり取りしてください。
            </p> */}
            <Input name={"a"} value={state} />
            <Input name={"b"} value={state} />

            <select value={state.type} name="type" onChange={calculate}>
                {CALC_OPTIONS.map((type) => (
                    <option key={type} value={type}>
                        {type}
                    </option>
                ))}
            </select>
            <h3>結果：{state.result}</h3>
        </>
    );
};

export default Example;
