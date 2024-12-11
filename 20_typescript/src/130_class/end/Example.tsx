// POINT TypeScriptでのクラスの扱い方を学ぼう
class User {
  public name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const Example = () => {
  const user = { name: "Hanako", age: 21 };
  const user1 = new User("Hanako", 22);
  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
};

export default Example;
