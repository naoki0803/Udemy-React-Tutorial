import { useState } from "react";

const Message = () => {
  const [h2Content, handleHeading] = useState("");
  const [inputContent, handleInput] = useState("");
  const [buttonView, handleBtn] = useState(true);

  const inputMessage = (event) => {
    if (event.target.value === "") {
      handleBtn(true);
    } else {
      handleBtn(false);
    }
    handleInput(event.target.value);
  };

  const submitBtn = () => {
    handleHeading(inputContent);
    handleInput("");
    handleBtn(true);
  };

  return (
    <div>
      <h2>入力された文字:{h2Content}</h2>
      <div className="inputForm">
        <input value={inputContent} onChange={inputMessage}></input>
        <button onClick={submitBtn} disabled={buttonView}>
          送信ボタン
        </button>
      </div>
    </div>
  );
};

export default Message;
