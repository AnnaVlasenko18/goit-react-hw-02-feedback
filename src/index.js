import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    background: '#93c592',
    backgroundBtn: '#679267',
    backgroundBorder: '#173620',
    color: '#173620',
    colorBtn: '#f2f3f4',
    accentBtn: '#173620',
    accentColorBtn: 'white',
  },

  radii: {
    sm: '4px',
  },

  font: {
    fontSize: '18px',
  },

  spacing: value => `${value * 4}px`,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
