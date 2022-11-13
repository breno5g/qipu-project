import Router from './Routes';
import { ProductsProvider } from './hooks/useProducts';

function App() {
  return (
    <>
      <ProductsProvider>
        <Router />
      </ProductsProvider>
    </>
  );
}

export default App;
