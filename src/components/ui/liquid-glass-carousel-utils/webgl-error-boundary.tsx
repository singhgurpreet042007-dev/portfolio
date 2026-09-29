import React, { Component, ReactNode, ErrorInfo } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class WebGLErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('WebGL error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? null;
    }
    return this.props.children;
  }
}

export const WebGLFallback: React.FC<{ className?: string; message?: string }> = ({
  className = '',
  message = 'WebGL is not supported in this browser.',
}) => {
  return (
    <div className={`flex items-center justify-center p-6 text-center text-sm text-neutral-500 ${className}`}>
      <p>{message}</p>
    </div>
  );
};
