import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error){
    // 副作用の記述NG
  }
  
  componentDidCatch(error, errorInfo) {
    // 副作用の記述OK
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <div>
          <h3>エラー発生</h3>
          <details style={{ whiteSpace: "pre-wrap" }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
