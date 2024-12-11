import { Component } from "react";

class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.add = this.add.bind(this);
  }

  add() {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  componentDidMount() {
    console.log("ライフサイクル:マウント済み");
  }

  componentDidUpdate() {
    console.log("ライフサイクル:更新済み");
  }

  componentWillUnmount() {
    console.log("ライフサイクル:アンマウント済み");
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <p>カウント数：{count}</p>
        <button onClick={this.add}>+1</button>
      </div>
    );
  }
}

export default LifecycleDemo;
