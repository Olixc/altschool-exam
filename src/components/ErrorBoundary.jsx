import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  static getDerivedState(error) {
    return { error: true };
  }

  componentDidCatch(error, errorInfo) {
    // Catch error in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });

    // You can log error message to an error to a reporting service
  }
  render() {
    if (this.state.errorInfo) {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height: "90vh",
          }}
        >
          <h2>Something went wrong.</h2>
          <details
            style={{
              whiteSpace: "pre-wrap",
            }}
          >
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }

    return this.props.children;
    //
  }
}

export default ErrorBoundary;
