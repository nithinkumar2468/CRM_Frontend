import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { Store } from "./Redux/Store";
import { CartProvider } from "./context/ContextCart";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartProvider>
    <Provider store={Store}>
    <App />
  </Provider>
  </CartProvider>
);

reportWebVitals();
