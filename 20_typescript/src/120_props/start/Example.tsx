import Hello, { Btn, Button } from "./components/Hello";

const Example: React.FC = () => {
    // 練習用
    return (
        <>
            <Hello text="World">
                <div className="ul">children</div>
            </Hello>

            <Hello text="TypeScript">children</Hello>

            <Btn fn={(text) => console.log(`Hello ${text}`)} />

            <Button text="プロップスとして渡されてきた値" />
        </>
    );
};

export default Example;
