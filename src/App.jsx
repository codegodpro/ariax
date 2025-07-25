import React from 'react';
import Routes from './Routes';
import { ThemeProvider } from './contexts/ThemeContext';
import './styles/index.css';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="arias-theme">
      <div className="App">
        <Routes />
      </div>
    </ThemeProvider>
  );
}

export default App;