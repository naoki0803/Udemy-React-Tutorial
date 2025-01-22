import { useLayoutEffect, useEffect, useState, useRef } from "react";

const Random = () => {
    const [state, setState] = useState(0);
    const [stateLayout, setLayoutState] = useState(0);

    useEffect(() => {
        if (state === 0) {
            setState(Math.random() * 300);
        }
    }, [state]);

    useLayoutEffect(() => {
        if (stateLayout === 0) {
            setLayoutState(Math.random() * 300);
        }
    }, [stateLayout]);

    return (
        <>
            <h3>useLayoutEffectのボタン</h3>
            <span>ちらつきがない</span>
            <button
                className="effect-btn"
                onClick={() => setLayoutState(0)}
                style={{ fontSize: "2.5em" }}
            >
                useLayoutState: {stateLayout}
            </button>
            <h3>useEffectのボタン</h3>
            <span>ちらつく</span>
            <button
                className="effect-btn"
                onClick={() => setState(0)}
                style={{ fontSize: "2.5em" }}
            >
                useState: {state}
            </button>
        </>
    );
};
export default Random;
