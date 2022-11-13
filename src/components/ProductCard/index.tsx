import { Container } from './styles';
import { IProduct } from '~/interfaces/product';

interface FoodProps {
  product: IProduct;
  onClick(product: any): void;
}

function index({ product, onClick }: FoodProps) {
  return (
    <Container
      onClick={() => onClick(product)}
      alertColor={product.quantity > 0 ? '--low-stock-alert' : '--out-of-stock-alert'}
    >
      <header>
        <h1>{product.name}</h1>
        <span>{product.quantity}</span>
      </header>
      <div>
        <p>{product.description}</p>
        {product.quantity < 10 && (
          <span>{product.quantity > 0 ? 'Estoque baixo' : 'Fora de estoque'}</span>
        )}
      </div>
    </Container>
  );
}

export default index;
