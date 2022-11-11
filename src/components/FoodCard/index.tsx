import { Container } from './styles';

interface FoodProps {
  name: string;
  quantity: number;
  description: string;
}

function index({ description, name, quantity }: FoodProps) {
  return (
    <Container alertColor={quantity > 0 ? '--low-stock-alert' : '--out-of-stock-alert'}>
      <header>
        <h1>{name}</h1>
        <span>{quantity}</span>
      </header>
      <div>
        <p>{description}</p>
        {quantity < 10 && <span>{quantity > 0 ? 'Estoque baixo' : 'Fora de estoque'}</span>}
      </div>
    </Container>
  );
}

export default index;
