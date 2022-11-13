import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Select, { MultiValue } from 'react-select';
import { Container } from './styles';
import { EditedProductData } from '~/interfaces/product';
import { useProducts } from '~/hooks/useProducts';

interface EditProductModalProps {
  openCloseModal(): void;
  data: EditedProductData;
}

function EditProductModal({ openCloseModal, data }: EditProductModalProps) {
  const { editProduct, categories } = useProducts();
  const [productData, setProductData] = useState(data);

  const handleProduct = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    event.preventDefault();

    const { name, value } = event.target;
    let valueHandler: string | number = value;
    if (name === 'quantity' || name === 'price') {
      valueHandler = Number(value);
    }
    setProductData({
      ...productData,
      [name]: valueHandler,
    });
  };

  const handleSelect = (data: MultiValue<{ label: string; value: string }>) => {
    setProductData({
      ...productData,
      categories: data.map((prod) => prod.value),
    });
  };

  const handleEditProduct = (event: React.FormEvent) => {
    event.preventDefault();
    editProduct(productData);
    openCloseModal();
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
          <form onSubmit={handleEditProduct}>
            <label htmlFor='name'>
              Nome
              <input
                type='text'
                id='name'
                name='name'
                placeholder='Insira o nome'
                value={productData.name}
                onChange={handleProduct}
              />
            </label>
            <label htmlFor='quantity'>
              Quantidade
              <input
                type='number'
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
                options={categories.map((cat) => ({ label: cat, value: cat }))}
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
                onChange={handleProduct}
              />
            </label>
            <label htmlFor='description'>
              Descrição
              <textarea
                name='description'
                placeholder='Insira a descrição do produto'
                value={productData.description}
                onChange={handleProduct}
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
