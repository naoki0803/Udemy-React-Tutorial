// POINT クラスコンポーネントにおける状態管理
import { Component } from "react";

class SwitchButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switchOn: true,
      label: 'On'
    }
    this.changeSwitch = this.changeSwitch.bind(this);
  }

  changeSwitch() {
    this.setState(prevState => {
      return {
        switchOn: !prevState.switchOn,
        label: !prevState.switchOn ? 'On' : 'Off'
      }
    })
  }

  render() {
    const { label } = this.state;
    return (
      <button onClick={this.changeSwitch}>{label}</button>
    )
  }
}
const Example = () => {
  return (
    <>
      <SwitchButton />
    </>
  );
};

export default Example;
