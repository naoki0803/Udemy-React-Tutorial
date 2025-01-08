import { useRef, forwardRef } from "react";

const Input = ({ customRef }) => {
    return <input type="text" ref={customRef} />;
};

// forwardRef関数として定義することで、refを子要素に渡す事ができる。
// callback関数の第二引数に、refがわたってくる
const ForwardInput = forwardRef((props, ref) => {
    return <input type="text" ref={ref} />;
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
            <button onClick={() => ref.current.focus()}>
                ForwardInput(下段)にインプット要素をフォーカスする
            </button>
        </>
    );
};

export default Example;
