// POINT ユニオン型(union type)は、複数の型を組み合わせて「型Tまたは型U」のような、「または」の意味を表すことができる
// POINT T | U というように、| を用いてユニオン型を表す

const Example = () => {
  let strOrNum: string | number = 'Hello';
  strOrNum = 123;
  console.log(strOrNum);
  
  let strOrNumOrBool: string | number | boolean = 'Hello';
  strOrNumOrBool = true;
  console.log(strOrNumOrBool);

  let helloOrNumOrBool: 'Hello' | number | boolean = false;

  type HelloOrNum = 'Hello' | number;
  const hello: HelloOrNum = 'Hello';

  type DayOfWeek =
    | 'Monday'
    | 'Tuesday'

  const day: DayOfWeek = 'Monday';
};

export default Example;
