import Header from './components/Header';
import FoodCard from './components/FoodCard';
import { useState } from 'react';
import { IProduct } from './interfaces/product';
import FoodDetails from './components/FoodDetails';

function App() {
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>();

  const handleSelectProduct = (product: IProduct) => {
    setSelectedProduct(product);
  };

  const closeFoodDetails = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <Header />
      {[
        {
          id: 1,
          name: 'Café preto',
          quantity: 9,
          description: 'teste',
          image: 'https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG',
          categories: ['bebida', 'café'],
          price: 5,
        },
        {
          id: 2,
          name: 'Café Azul',
          quantity: 0,
          description: 'teste',
          image: 'https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG',
          categories: ['bebida', 'café', 'Misteriosa'],
          price: 5,
        },
      ].map((food: IProduct) => (
        <FoodCard key={food.id} product={food} onClick={handleSelectProduct} />
      ))}
      {selectedProduct && <FoodDetails product={selectedProduct} onClick={closeFoodDetails} />}
    </>
  );
}

export default App;
