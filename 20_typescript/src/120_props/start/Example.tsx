import Hello, { Btn, Button } from "./components/Hello";

const Example: React.FC = () => {
    const clickHandler = (text: string) => console.log(`Hello ${text}`);

    // 練習用
    return (
        <>
            <Hello text="World">
                <div className="ul">children</div>
            </Hello>

            <Hello text="TypeScript">children</Hello>

            <Btn clickHandler={clickHandler} />

            <Button text="プロップスとして渡されてきた値" />
        </>
    );
};

export default Example;
