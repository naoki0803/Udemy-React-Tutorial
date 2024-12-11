import { useState } from 'react';

const Message = () => {
  const [message, setMessage] = useState('');
  return (
    <>
      <input
        style={{ width: '300px' }}
        type="text"
        placeholder="メッセージを入力してください"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
    </>
  );
};

export default Message;
