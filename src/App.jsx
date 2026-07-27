import React, { Component } from 'react';
import BuildAuraApp from './components/BuildAuraApp'; // Path to your component file

// Basic Error Boundary for Production Safety
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("BuildAura Application Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 text-center">
          <h1 className="text-2xl font-bold text-red-400 mb-2">Something went wrong</h1>
          <p className="text-slate-400 text-sm mb-4">Please refresh the page or try again later.</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-indigo-600 rounded-lg text-sm font-semibold"
          >
            Reload Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  return (
    <ErrorBoundary>
      {/* 
        Main Wrapper:
        - min-h-screen & w-full ensures full viewport coverage
        - overflow-x-hidden prevents mobile horizontal scrollbars caused by animations
        - bg-slate-950 ensures no white flash while loading
      */}
      <main className="w-full min-h-screen overflow-x-hidden bg-slate-950 font-sans antialiased">
        <BuildAuraApp />
      </main>
    </ErrorBoundary>
  );
}