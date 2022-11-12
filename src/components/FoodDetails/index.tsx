import { Container } from './styles';
import { AiOutlineClose, AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { IProduct } from '~/interfaces/product';

interface FoodDetailsProps {
  product: IProduct;
  close(product: any): void;
  deleteProduct(id: number): void;
}

function FoodDetails({
  product: { id, description, name, quantity, image, categories, price },
  close,
  deleteProduct,
}: FoodDetailsProps) {
  return (
    <Container>
      <header>
        <div className='left-side'>
          <button className='close-modal' onClick={close}>
            <AiOutlineClose />
          </button>
          <div className='product-info'>
            <img src={image} alt={name} />
            <h1>{name}</h1>
          </div>
        </div>
        <aside className='right-side'>
          <button className='delete-product-btn' onClick={() => deleteProduct(id)}>
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
