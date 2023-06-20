import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from "./context/themeContext";

import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";

export const baseUrl = "http://localhost:3004/blogs/";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
