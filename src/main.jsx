import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import Store from './Store.jsx';
import { RouterProvider } from 'react-router-dom';
import router from './AppRoutes/Routes.jsx';
// import Navbar from './Components/Navbar.jsx';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={Store}>
      
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
