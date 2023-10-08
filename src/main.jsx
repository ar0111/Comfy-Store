import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'react-toastify/dist/ReactToastify.css';
// order
import './index.css';

import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { store } from './Store.js';
import UserContext from './Components/Context/UserContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <UserContext>
      <App />
    </UserContext>
    <ToastContainer position='top-center' />
  </Provider>
);
