import { Container } from './styles';
import { IProduct } from '~/interfaces/product';
import ProductCard from '../ProductCard';

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
