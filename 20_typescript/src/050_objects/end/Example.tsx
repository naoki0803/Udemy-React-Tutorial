// POINT TypeScriptにおけるオブジェクトの型定義ついて学ぼう
const Example = () => {
  const arry1: number[] = [1,2,3];
  const arry2: string[] = ['hello','bye'];
  const arry3: Array<number> = [1,2,3];
  const arry4: (string | number)[] = [1,'bye'];
  const arry5: Array<string | number> = [1,'bye'];
  
  type Person = { name: string, age?: number }
  const obj1: Person = { name: 'Taro' };
  
  const users: { name: string, age?: number }[] = [
    { name: 'Taro' },
    { name: 'Hanako', age: 30 },
    { name: 'Jiro', age: 30 }
  ]
};

export default Example;
