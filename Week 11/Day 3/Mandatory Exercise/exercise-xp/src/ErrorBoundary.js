import React from "react";
//import BuggyCounter from "./components/BuggyCounter";

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
      error: null,
      // errorInfo: null
    };
  }
  componentDidCatch(error) {
    this.setState({ hasError: true, error: error });
  }
  render() {
    if (this.state.hasError) {
      return <>Something is wrong, we are fixing the problem</>;
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
