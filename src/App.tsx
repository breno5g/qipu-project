import Header from './components/Header';
import FoodCard from './components/FoodCard';
import { useState } from 'react';
import { IProduct } from './interfaces/product';
import FoodDetails from './components/FoodDetails';
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
    closeFoodDetails();
  };

  const closeFoodDetails = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <Header />
      {products?.map((food: IProduct) => (
        <FoodCard key={food.id} product={food} onClick={handleSelectProduct} />
      ))}
      {selectedProduct && (
        <FoodDetails
          product={selectedProduct}
          close={closeFoodDetails}
          deleteProduct={handleDeleteProduct}
        />
      )}
    </>
  );
}

export default App;
