import { Component } from "react";
import { AlertTriangle } from "lucide-react";

export default class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // In production, wire this up to an error-reporting service.
    console.error("Portfolio crashed:", error, info);
  }

  handleReload = () => {
    window.location.href = "/";
  };

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-void px-6 text-center">
        <span className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan/10 text-cyan-soft">
          <AlertTriangle size={28} strokeWidth={1.75} />
        </span>
        <h1 className="font-display text-2xl font-semibold text-text sm:text-3xl">
          Something went wrong
        </h1>
        <p className="mt-3 max-w-sm text-muted">
          The page hit an unexpected error. Try reloading — if it keeps
          happening, let me know via the contact form.
        </p>
        <button
          onClick={this.handleReload}
          className="mt-8 rounded-md bg-cyan px-6 py-3 font-mono text-sm font-medium text-void transition-transform hover:-translate-y-0.5"
        >
          Back to home
        </button>
      </div>
    );
  }
}
