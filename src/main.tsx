import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { ProductsProvider } from './hooks/useProducts';

// styles
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ProductsProvider>
      <App />
    </ProductsProvider>
  </React.StrictMode>,
);
