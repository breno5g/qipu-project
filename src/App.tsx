import { productsData } from 'developmentData';
import { useState } from 'react';
import ProductDetails from './components/FoodDetails';
import Header from './components/Header';
import { IProduct } from './interfaces/product';
import ProductList from './components/ProductList';

function App() {
  const [products, setProducts] = useState<IProduct[] | []>(productsData);
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>();

  const handleSelectProduct = (product: IProduct) => {
    setSelectedProduct(product);
  };

  const handleDeleteProduct = (id: number) => {
    const filteredArray = products.filter((prod) => prod.id != id);
    setProducts(filteredArray);
    closeProductDetails();
  };

  const closeProductDetails = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <Header />
      <ProductList products={products} handleSelectProduct={handleSelectProduct} />
      {selectedProduct && (
        <ProductDetails
          product={selectedProduct}
          close={closeProductDetails}
          deleteProduct={handleDeleteProduct}
        />
      )}
    </>
  );
}

export default App;
