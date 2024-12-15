import React from 'react';
import { jsx as _jsx } from 'react/jsx-runtime';

// console.log(_jsx);
// console.log(React.createElement);
const Example = () => {
  // const sample1 = <h1 className="greeting">Hello World</h1>;

  // // どちらも同じobjectがconsoleで出力される
  // console.log('🚀🚀🚀 ~ Example ~ sample1:', sample1);
  // console.log(<h1 className="greeting">Hello World</h1>);

  // 実際はbabelが以下の関数に変換して、関数の実行結果としてオブジェクトに変換されている。
  // https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=DwEwlgbgfAUABAxTgAsCMUASBTANrgewEJgB6dWJKuVAJigHECCQ4AXAuAZ22zgE8CAVwB0ZFPXhUy4aEA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2%2Ctypescript&prettier=false&targets=&version=7.18.3&externalPlugins=&assumptions=%7B%7D

  /*#__PURE__*/
  // return _jsx('h1', {
  //   className: 'greeting',
  //   children: 'Hello World',
  // });

  // 多階層の場合,React要素も多階層で用言される
  const sample2 = (
    <div>
      <h1>Hello!</h1>
      <h2>Good to see you.</h2>
    </div>
  );

  console.log(
    (
      <div>
        <h1>Hello!</h1>
        <h2>Good to see you.</h2>
      </div>
    ).props
  );

  return React.createElement(
    'div',
    null,
    React.createElement('h1', null, 'Hello!'),
    React.createElement('h2', null, 'Good to see you.')
  );
};

export default Example;
