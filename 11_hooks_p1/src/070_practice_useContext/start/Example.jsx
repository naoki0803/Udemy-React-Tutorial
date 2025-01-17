import Input from "./components/Input";
import Result from "./components/Result";
import Select from "./components/Select";
import { CalcProvider } from "./context/CalcContext";

const Example = () => {
    return (
        /* 完成系のJSX */
        <>
            <CalcProvider>
                <Input name="a" />
                <Input name="b" />
                <Select />
                <Result />
            </CalcProvider>
            {/* <h3>練習問題</h3>
            <p>
                Example内のコードをコンポーネントに分割してください。また、ステートはContext経由でやり取りしてください。
            </p> */}
        </>
    );
};

export default Example;
