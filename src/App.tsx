import Header from './components/Header';
import ProductCard from './components/ProductCard';
import { useState } from 'react';
import { IProduct } from './interfaces/product';
import ProductDetails from './components/ProductDetails';
import { productsData } from 'developmentData';

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
      {products?.map((food: IProduct) => (
        <ProductCard key={food.id} product={food} onClick={handleSelectProduct} />
      ))}
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
