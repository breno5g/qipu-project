import { AiFillDelete, AiFillEdit, AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import { Container } from './styles';
import EditProductModal from '../EditProductModal';
import { IProduct } from '~/interfaces/product';
import { useProducts } from '~/hooks/useProducts';

interface FoodDetailsProps {
  close(product: any): void;
  deleteProduct(id: number): void;
}

function FoodDetails({ close, deleteProduct }: FoodDetailsProps) {
  const [isEditModalVisible, setIsEditModalVisible] = useState<boolean>(false);
  const { selectedProduct } = useProducts();
  const { name, categories, description, id, image, price, quantity } = selectedProduct as IProduct;

  const handleEditModal = () => {
    setIsEditModalVisible((prevstate) => !prevstate);
  };

  return (
    <>
      <Container>
        <header>
          <div className='left-side'>
            <button className='close-modal' onClick={() => close(null)}>
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
            <button className='edit-product-btn' onClick={handleEditModal}>
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
              <span className='content'>R$ {price.toFixed(2)}</span>
            </li>
            <li>
              <span className='title'>Descrição</span>
              <span className='content'>{description}</span>
            </li>
          </ul>
        </main>
      </Container>
      {isEditModalVisible && (
        <EditProductModal
          openCloseModal={handleEditModal}
          data={{
            id,
            quantity,
            categories,
            description,
            price,
          }}
        />
      )}
    </>
  );
}

export default FoodDetails;
