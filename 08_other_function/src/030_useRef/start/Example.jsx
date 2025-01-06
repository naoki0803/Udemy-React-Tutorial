/** useRef とは
 * DOMを直接操作する為に利用する関数。
 */

import { useState, useRef } from "react";

const Case1 = () => {
    const [value, setValue] = useState("");
    const inputRef = useRef();
    return (
        <div>
            <h3>ユースケース1</h3>
            <input
                type="text"
                ref={inputRef}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button onClick={() => inputRef.current.focus()}>
                インプット要素をフォーカスする
            </button>
        </div>
    );
};

const Case2 = () => {
    const [playing, setPlaying] = useState(false);
    const inputRef = useRef();

    const style = {
        width: "100%",
    };

    const clickHandler = () => {
        if (playing) {
            // setPlaying(false);
            inputRef.current.pause();
        } else {
            // setPlaying(true);
            inputRef.current.play();
        }
        setPlaying((prev) => !prev); // useStateで再生中かどうかは管理する
    };

    return (
        <div>
            <h3>ユースケース2</h3>
            <video
                // src="../../../public/sample.mp4" // ReactはBuildされると、publicフォルダで動作している為、./sample.mp4と記述すればアクセス可能
                src="./sample.mp4"
                ref={inputRef}
                style={style}
            ></video>
            <button onClick={clickHandler}>{playing ? "Stop" : "Play"}</button>
        </div>
    );
};

const Example = () => {
    return (
        <>
            <Case1 />
            <Case2 />
        </>
    );
};

export default Example;
