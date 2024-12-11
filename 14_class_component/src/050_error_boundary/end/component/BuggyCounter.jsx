import { Component } from "react";

class BuggyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(({ counter }) => ({
      counter: counter + 1,
    }));
  }

  render() {
    if (this.state.counter === 5) {
      throw new Error("エラー：カウント上限５を超えました！");
    }
    return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;
  }
}
export default BuggyCounter;
