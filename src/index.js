import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './i18n';
import './index.css';

const loadingMarkup = (
  <div>
    <h2>Loading...</h2>
  </div>
);

ReactDOM.render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>,
  document.getElementById('root')
);
