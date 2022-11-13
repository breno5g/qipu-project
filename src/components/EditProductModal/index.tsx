import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Select, { MultiValue } from 'react-select';
import { Container } from './styles';

interface EditProductModalProps {
  openCloseModal(): void;
  data: { id: number; quantity: number; categories: string[]; price: number; description: string };
}

function EditProductModal({ openCloseModal, data }: EditProductModalProps) {
  const [productData, setProductData] = useState(data);

  const handleProduct = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    const { name, value } = event.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleSelect = (data: MultiValue<{ label: string; value: string }>) => {
    console.log(data);

    setProductData({
      ...productData,
      categories: data.map((prod) => prod.value),
    });
  };

  return (
    <Container>
      <div className='content'>
        <header>
          <h1>Editar produto</h1>
          <button className='close-modal' onClick={openCloseModal}>
            <AiOutlineClose />
          </button>
        </header>
        <main>
          <form>
            <label htmlFor='quantity'>
              Quantidade
              <input
                type='text'
                id='quantity'
                name='quantity'
                placeholder='Insira a quantidade'
                value={productData.quantity}
                onChange={handleProduct}
              />
            </label>
            <label htmlFor='categories'>
              Categorias
              <Select
                isMulti
                name='categories'
                defaultValue={productData.categories.map((prod) => ({ label: prod, value: prod }))}
                closeMenuOnSelect={false}
                onChange={handleSelect}
                placeholder={'Selecione as Categorias'}
                options={[
                  {
                    label: 'bebida',
                    value: 'bebida',
                  },
                  {
                    label: 'café',
                    value: 'café',
                  },
                ]}
              />
            </label>
            <label htmlFor='price'>
              Preço
              <input
                type='number'
                id='price'
                name='price'
                placeholder='Insira o preço'
                value={productData.price}
              />
            </label>
            <label htmlFor='description'>
              Descrição
              <textarea
                name='description'
                placeholder='Insira a descrição do produto'
                value={productData.description}
              />
            </label>
            <button type='submit'>Salvar</button>
          </form>
        </main>
      </div>
    </Container>
  );
}

export default EditProductModal;
