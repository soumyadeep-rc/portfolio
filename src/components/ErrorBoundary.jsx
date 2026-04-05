import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render shows the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Silently log the WebGL crash to the console without breaking the site
    console.warn("WebGL blocked or crashed. Falling back to CSS Stars.");
  }

  render() {
    if (this.state.hasError) {
      // Render the fallback component (our CSS stars)
      return this.props.fallback;
    }

    // Otherwise, render the children normally
    return this.props.children;
  }
}

export default ErrorBoundary;