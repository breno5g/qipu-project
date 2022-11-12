import { Container } from './styles';
import ProductCard from '../FoodCard';
import { IProduct } from '~/interfaces/product';

interface ProductListProps {
  products: IProduct[];
  handleSelectProduct(product: IProduct): void;
}

function ProductList({ products, handleSelectProduct }: ProductListProps) {
  return (
    <Container>
      {products?.map((food: IProduct) => (
        <ProductCard key={food.id} product={food} onClick={handleSelectProduct} />
      ))}
    </Container>
  );
}

export default ProductList;
