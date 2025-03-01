type HelloProps = {
    text?: string;
    children: React.ReactNode;
};

const Hello: React.FC<HelloProps> = (props) => {
    return (
        <h1>
            Hello {props.text}!! {props.children}
        </h1>
    );
};

type FnProps = {
    fn: (text: string) => void;
};

const Btn: React.FC<FnProps> = (props) => {
    return <button onClick={() => props.fn("TypeScript")}>ボタン!!</button>;
};

type ButtonProps = {
    text: string;
};

const Button: React.FC<ButtonProps> = (props) => {
    const clickHandler = () => console.log(props.text);
    return <button onClick={clickHandler}>ボタン</button>;
};

export { Btn, Button };

export default Hello;
