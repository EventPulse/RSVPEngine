import React from 'react';
import ReactDOM from 'react-dom/client';
import EventApp from './event.jsx';
import './styles2.css';

const rootElement = document.getElementById('root2');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  console.log('hello');
  root.render(
    <React.StrictMode>
      <EventApp />
    </React.StrictMode>,
  );
}