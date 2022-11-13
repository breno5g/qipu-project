import { IoIosAdd } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { Container } from './style';

function AddProductButton() {
  const navigate = useNavigate();
  const handleAddNewProduct = () => {
    navigate('/newproduct');
  };

  return (
    <Container onClick={handleAddNewProduct}>
      <IoIosAdd />
    </Container>
  );
}

export default AddProductButton;
