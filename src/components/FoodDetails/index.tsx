import { Container } from './styles';
import { AiOutlineClose, AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { IProduct } from '~/interfaces/product';

interface FoodDetailsProps {
  product: IProduct;
  onClick(product: any): void;
}

function FoodDetails({
  product: { description, name, quantity, image, categories, price },
  onClick,
}: FoodDetailsProps) {
  return (
    <Container>
      <header>
        <div className='left-side'>
          <button className='close-modal' onClick={onClick}>
            <AiOutlineClose />
          </button>
          <div className='product-info'>
            <img src={image} alt={name} />
            <h1>{name}</h1>
          </div>
        </div>
        <aside className='right-side'>
          <button className='delete-product-btn'>
            <AiFillDelete />
          </button>
          <button className='edit-product-btn'>
            <AiFillEdit />
          </button>
        </aside>
      </header>
      <main>
        <ul>
          <li>
            <span className='title'>Estoque</span>
            <span className='content'>{quantity}</span>
          </li>
          <li>
            <span className='title'>Categorias</span>
            <span className='content'>{categories.join(', ')}</span>
          </li>
          <li>
            <span className='title'>Valor de venda</span>
            <span className='content'>R$ {price}</span>
          </li>
          <li>
            <span className='title'>Descrição</span>
            <span className='content'>{description}</span>
          </li>
        </ul>
      </main>
    </Container>
  );
}

export default FoodDetails;
