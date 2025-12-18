import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './component/Main';
import './styles.css';
const rootEl = document.getElementById('root');
if (rootEl) {
    createRoot(rootEl).render(_jsx(React.StrictMode, { children: _jsx(App, {}) }));
}
