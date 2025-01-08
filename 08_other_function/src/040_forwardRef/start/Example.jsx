import { useRef, forwardRef, useImperativeHandle } from "react";

const Input = ({ customRef }) => {
    return <input type="text" ref={customRef} />;
};

// forwardRef関数として定義することで、refを子要素に渡す事ができる。
// 結果的に親コンポーネントから、子コンポーネントのDOMを操作する事ができる
// callback関数の第二引数に、refがわたってくる
// 子から親に対してデータがわたっていくので、基本的には利用しない方がよい。(useStateなどで実装する)
const ForwardInput = forwardRef((props, ref) => {
    // useImperativeHandle
    // 第一引数にわたってきたref、第二引数に、使用したいメソッドを含むObjectを含む関数
    // 親コンポーネントかわわたってきたrefと子コンポーネント内で利用するrefは別の物を定義する必要がある。
    const inputRef = useRef();

    useImperativeHandle(ref, () => ({
        myFocus() {
            inputRef.current.focus();
            console.log("focus");
        },
    }));
    return <input type="text" ref={inputRef} />;
});

const Example = () => {
    const ref = useRef();
    const customRef = useRef();
    return (
        <>
            {/* ref ではなく、別名称でrefを渡すことでエラーが解消される */}
            <div>
                <Input customRef={customRef} />
            </div>
            <button onClick={() => customRef.current.focus()}>
                Input(上段)インプット要素をフォーカスする
            </button>
            <div>
                <ForwardInput ref={ref} />
            </div>
            {/* rcurrentにDOMが入ってくるため、子コンポーネント作成者の意図と異なる挙動が実行される可能性がある */}
            {/* <button onClick={() => ref.current.focus()}> */}
            <button onClick={() => ref.current.myFocus()}>
                ForwardInput(下段)にインプット要素をフォーカスする
            </button>
        </>
    );
};

export default Example;
