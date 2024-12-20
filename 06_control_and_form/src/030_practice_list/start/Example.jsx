import Profile from './components/Profile';

class Person {
  constructor(name, age, hobbies) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  }
}

const Example = () => {
  const taro = new Person('taro', 15, ['sports', 'music']);
  const jiro = new Person('jiro', 33, ['test', 'サウナ']);
  const saburo = new Person('saburo', 20, ['寝る', '映画']);

  const persons = [];
  persons.push(taro, jiro, saburo);

  return (
    <>
      {/* <h3>練習問題</h3>
      <p>
        Profileコンポーネントを使用して、完成コードと同じ画面を作成してください。
      </p>
      <p>
        また、Profileコンポーネント内のリスト表示部分にkeyを設定して、ワーニング表示がされないようにしてください。
      </p> */}

      <ul>
        {persons.map((person) => (
          <li key={person.name}>
            <Profile {...person} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Example;
