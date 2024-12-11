import { Component } from "react";
/* POINT Error Boundaryとは
error boundary は自身の子コンポーネントツリーで発生した JavaScript エラーをキャッチし、エラーを記録し、
クラッシュしたコンポーネントツリーの代わりにフォールバック用の UI を表示する React コンポーネントです。
error boundary は配下のツリー全体のレンダー中、ライフサイクルメソッド内、およびコンストラクタ内で発生したエラーをキャッチします。
 */

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
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
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
