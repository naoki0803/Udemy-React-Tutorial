const Example = () => {
  // 関数型（純粋関数）
  // ・fn(決まった引数) -> 決まった戻り値
  // ・関数外の状態（データ）は参照・変更しない。
  // ・関数外に影響を及ぼさない。
  // POINT 引数で渡された値を変更しない。（Immutabilityの保持）
  // 上記の要件を満たさない操作は「副作用」と呼ぶ。

  const num = { val: 2 }
  
  const double = (num) => {
    const newNum = { val: num.val * 2 };
    // newNum.val = num.val * 2;
    return newNum;
  }

  const newNum = double(num);
  console.log('newNum', newNum, 'num', num)
  console.log(newNum === num);
  return (
    <>
      <div>Immutability</div>
    </>
  );
};

export default Example;
