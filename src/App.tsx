import Header from './components/Header';
import FoodCard from './components/FoodCard';

function App() {
  return (
    <>
      <Header />
      {[{ id: 1, name: 'Café preto', quantity: 9, description: 'teste' }].map((food) => (
        <FoodCard
          key={food.id}
          name={food.name}
          description={food.description}
          quantity={food.quantity}
        />
      ))}
    </>
  );
}

export default App;
