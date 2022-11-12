import { Container } from './styles';
import { AiOutlineClose, AiFillDelete, AiFillEdit } from 'react-icons/ai';

function FoodDetails() {
  return (
    <Container>
      <header>
        <div className='left-side'>
          <button className='close-modal'>
            <AiOutlineClose />
          </button>
          <div className='product-info'>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG'
              alt='coffee'
            />
            <h1>Café preto</h1>
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
            <span className='content'>10</span>
          </li>
          <li>
            <span className='title'>Categorias</span>
            <span className='content'>Bebidas, Café</span>
          </li>
          <li>
            <span className='title'>Valor de venda</span>
            <span className='content'>R$ 5.00</span>
          </li>
          <li>
            <span className='title'>Descrição</span>
            <span className='content'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse libero dolor itaque
              consequuntur ipsam, eaque accusantium.
            </span>
          </li>
        </ul>
      </main>
    </Container>
  );
}

export default FoodDetails;
