// POINT プリミティブとは
// プリミティブとは、TypeScriptが扱うことの出来る基本的な値のこと
// 具体的な例としては、文字列、数値、巨大な数値、真偽値、null、undefinedなどがある

const Example = () => {
  let str: string = 'Hello';
  str = 'Bye';
  console.log(str);

  let num: number = 102;
  console.log(num);
  
  let bignum: bigint = 103n;
  console.log(bignum);

  let bool: boolean = true;
  console.log(bool);

  let nullish: null = null;
  let undefinedValue: undefined = undefined;

  // リテラル型
  let trueVal: true = true;
  let num123: 123 = 123;
  let strHello: 'Hello' = 'Hello';

  // any型(何でも格納可能)
  let anyValue: any = [];
};

export default Example;
