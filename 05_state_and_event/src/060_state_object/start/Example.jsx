import { useState } from 'react';

const Example = () => {
  const personObj = { name: 'Tom', age: 18 };
  const [person, setPerson] = useState(personObj);
  const _changeName = (e) => {
    // setPersonでObjectの内容を変更する際の引数は、必ずuseStateで初期化したときと同じスキーマでObjectを渡す必要がある。
    setPerson({ name: e.target.value, age: person.age });
  };

  const changeName = (e) => {
    // setPersonでObjectの内容を変更する際の引数は、必ずuseStateで初期化したときと同じスキーマでObjectを渡す必要がある。
    setPerson({ ...person, name: e.target.value });
  };

  // setPersonで第一引数を分割代入した新規のオブジェクト、第二引数に第一引数で作成したオブジェクトから変更したい値のみ変更を指定する事ができる。
  const changeAge = (e) => {
    setPerson({ ...person, age: e.target.value });
  };

  // setPersonに既存オブジェクトの更新をしても、変更ができない
  const notChangeName = (e) => {
    person.name = e.target.value; // 既存のperson.nameを変更
    setPerson(person); // setPersonで再レンダリング
  };

  const reset = () => {
    setPerson(personObj);
  };

  return (
    <>
      <h3>Name:{person.name}</h3>
      <h3>Age:{person.age}</h3>
      <input type="text" onChange={changeName} value={person.name} />
      <input type="number" onChange={changeAge} value={person.age} />
      <div>
        <button onClick={reset}>リセット</button>
      </div>
    </>
  );
};

export default Example;
