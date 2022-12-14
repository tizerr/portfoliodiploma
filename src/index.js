import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import {ThemeWrapper} from "./components/ThemeWrapper/ThemeWrapper";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeWrapper>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeWrapper>
);
