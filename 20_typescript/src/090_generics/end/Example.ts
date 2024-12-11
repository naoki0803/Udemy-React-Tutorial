// POINT ジェネリクスとは、型引数(type parameters)を受け取る関数を作る機能のことを指す

const Example = () => {
  const repeatStr = (value: string, times: number): string[] => {
    return new Array(times).fill(value);
  }
  const repeatNum = (value: number, times: number): number[] => {
    return new Array(times).fill(value);
  }
  const repeat = <T>(value: T, times: number): T[] => {
    return new Array(times).fill(value);
  }
  const numArry = repeat(10, 3);
  const strArry = repeat<string>("hello", 3);
  const boolArry = repeat<boolean>(true, 3);
  const byeArry = repeat<"bye">("bye", 3);
  // const strArry = repeatStr("hello", 3);
  // const numArry = repeatNum(10, 3);
  // console.log(numArry);
};

export default Example;
