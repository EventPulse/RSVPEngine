import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import EventApp from './components/EventApp.jsx';
import Root from './components/Root.jsx';
import './stylesheets/styles.css';
import { loader as eventLoader } from './components/EventApp.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Root />,
      },
      {
        path: 'e/:eventId',
        loader: eventLoader,
        element: <EventApp />,
      },
    ],
  },
]);

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  );
}

export default router;
