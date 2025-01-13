import { useContext } from "react"; //2-1
import { MyContext } from "../Example"; //2-2

const GrandChild = () => {
    const [value] = useContext(MyContext);
    return (
        <div style={{ border: "1px solid black" }}>
            <h3>孫コンポーネント</h3>
            {value}
        </div>
    );
};
export default GrandChild;
