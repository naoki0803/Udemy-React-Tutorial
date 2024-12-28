import { useState } from 'react';
import SubButton from './components/SubButton';
import CssModuleButton from './components/CssModuleButton';

import './Example.css';

const Example = () => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => setIsSelected((prev) => !prev);

  return (
    <>
      <button
        className={`btn ${isSelected ? 'selected' : ''}`}
        onClick={clickHandler}
      >
        外部css読み込みボタン
      </button>
      <SubButton />
      <CssModuleButton clickHandler={clickHandler} isSelected={isSelected} />
      <div style={{ textAlign: 'center' }}>
        {isSelected && 'クリックされました。'}
      </div>
    </>
  );
};

export default Example;
