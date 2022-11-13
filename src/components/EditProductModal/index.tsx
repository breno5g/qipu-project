import { AiOutlineClose } from 'react-icons/ai';
import Select from 'react-select';
import { Container } from './styles';

function EditProductModal() {
  return (
    <Container>
      <div className='content'>
        <header>
          <h1>Editar produto</h1>
          <button className='close-modal'>
            <AiOutlineClose />
          </button>
        </header>
        <main>
          <form>
            <label htmlFor='quantity'>
              Quantidade
              <input type='text' id='quantity' placeholder='Insira a quantidade' />
            </label>
            <label htmlFor='categories'>
              Categorias
              <Select
                isMulti
                closeMenuOnSelect={false}
                placeholder={'Selecione as Categorias'}
                options={[
                  { value: 'Bebida', label: 'Bebida' },
                  { value: 'Café', label: 'Café' },
                ]}
              />
            </label>
            <label htmlFor='price'>
              Preço
              <input type='number' id='price' placeholder='Insira o preço' />
            </label>
            <label htmlFor='description'>
              Descrição
              <textarea />
            </label>
            <button type='submit'>Salvar</button>
          </form>
        </main>
      </div>
    </Container>
  );
}

export default EditProductModal;
