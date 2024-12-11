import { Component } from "react";
import BuggyCounter from "./component/BuggyCounter";
import ErrorBoundary from "./component/ErrorBoundary";

class Example extends Component {
  render() {
    return (
      <div>
        <h3>React16 Error Boundaries</h3>
        <p>下記の数値をクリック！</p>
        <hr />
        <h4>同じError Boundary内のコンポーネント</h4>
        <BuggyCounter />
        <BuggyCounter />
        <hr />
        <h4>異なるError Boundary内のコンポーネント</h4>
        <BuggyCounter />
        <BuggyCounter />
      </div>
    );
  }
}

export default Example;
