// 2023/10 存在しないファイルのimportでエラーが出るため修正
// 使用していないCounterContextのimport削除

import { useSelector } from "react-redux"
const CounterResult = () => {
  const state = useSelector(state => state);
  return <h3>{state}</h3>;
};

export default CounterResult;