import React, { useState } from 'react';
import Select, { MultiValue } from 'react-select';
import { useNavigate } from 'react-router-dom';
import { IoIosAdd } from 'react-icons/io';
import { Container } from './style';
import { IProduct } from '~/interfaces/product';
import { useProducts } from '~/hooks/useProducts';

function Index() {
  const { addProduct, categories, addCategorie } = useProducts();
  const [newCategorie, setNewCategorie] = useState('');
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [formValues, setFormValues] = useState<IProduct>({
    id: Math.random(),
    name: '',
    categories: [],
    description: '',
    image: '',
    price: 0,
    quantity: 0,
  });

  const increaseStep = (event: React.FormEvent) => {
    event.preventDefault();
    if (step != 5) {
      setStep((prevstate) => prevstate + 1);
    } else {
      addProduct(formValues);
      navigate('/');
    }
  };

  const handleFormValues = (event: React.FocusEvent<HTMLInputElement>) => {
    const { name, value, files } = event.target;
    let valueHandler: string | number = value;
    let filePath = '';
    if (name === 'image' && files) {
      filePath = URL.createObjectURL(files[0]);
      console.log(filePath);
    }
    if (name === 'price' || name === 'quantity') {
      valueHandler = Number(value);
    }
    setFormValues({
      ...formValues,
      [name]: filePath || valueHandler,
    });
  };

  const handleSelect = (data: MultiValue<{ label: string; value: string }>) => {
    setFormValues({
      ...formValues,
      categories: data.map((prod) => prod.value),
    });
  };

  return (
    <Container step={step}>
      <form>
        <div className='carousel'>
          <fieldset>
            <div className='top-content'>
              <span>◯⬤⬤⬤⬤⬤</span>
              <h1>Defina o nome do seu produto</h1>
              <p>Escolha um nome para você e seu cliente poderem identificá-lo.</p>

              <input type='text' name='name' value={formValues.name} onChange={handleFormValues} />
            </div>

            <button onClick={increaseStep}>continuar</button>
          </fieldset>
          <fieldset>
            <div className='top-content'>
              <span>◯◯⬤⬤⬤⬤</span>
              <h1>Escreva quantos produtos você tem no estoque</h1>
              <p>A quantidade ficará armazaenada para você controlar o seu estoque.</p>

              <input
                type='number'
                name='quantity'
                value={formValues.quantity}
                onChange={handleFormValues}
              />
            </div>

            <button onClick={increaseStep}>continuar</button>
          </fieldset>
          <fieldset>
            <div className='top-content'>
              <span>◯◯◯⬤⬤⬤</span>
              <h1>Descreva seu produto</h1>
              <p>Coloque detalhes sobre o que está sendo oferecido.</p>

              <input
                type='text'
                name='description'
                value={formValues.description}
                onChange={handleFormValues}
              />
            </div>

            <button onClick={increaseStep}>continuar</button>
          </fieldset>
          <fieldset>
            <div className='top-content'>
              <span>◯◯◯◯⬤⬤</span>
              <h1>Adicione as categorias</h1>
              <p>
                Separar os produtos em categorias pode facilitar a sua organização e ajuda os
                clientes encontrarem o que querem.
              </p>

              <div className='add-new-categorie'>
                <input
                  type='text'
                  placeholder='Adicionar nova categoria'
                  value={newCategorie}
                  onChange={(event) => {
                    setNewCategorie(event.target.value);
                  }}
                />
                <button
                  className='add'
                  onClick={(event) => {
                    event.preventDefault();
                    addCategorie(newCategorie);
                    setNewCategorie('');
                  }}
                >
                  <IoIosAdd />
                </button>
              </div>

              <Select
                isMulti
                name='categories'
                closeMenuOnSelect={false}
                placeholder={'Selecione as Categorias'}
                onChange={handleSelect}
                theme={(theme) => ({
                  ...theme,
                  colors: {
                    ...theme.colors,
                    primary25: '#00d4ff',
                  },
                })}
                styles={{
                  option: (provided) => ({
                    ...provided,
                    color: 'black',
                  }),
                }}
                options={categories.map((cat) => ({ label: cat, value: cat }))}
              />
            </div>

            <button onClick={increaseStep}>continuar</button>
          </fieldset>
          <fieldset>
            <div className='top-content'>
              <span>◯◯◯◯◯⬤</span>
              <h1>Adicione uma foto do seu produto</h1>
              <p>
                as fotos dos produtos aparecem para seus clientes em sua loja. É uma boa forma de
                mostrar o que você está oferecendo.
              </p>

              <label htmlFor='image'>
                <input
                  type='file'
                  id='image'
                  accept='image/png, image/jpg, image/gif, image/jpeg'
                  name='image'
                  onChange={handleFormValues}
                />
              </label>
            </div>

            <button onClick={increaseStep}>continuar</button>
          </fieldset>
          <fieldset>
            <div className='top-content'>
              <span>◯◯◯◯◯◯</span>
              <h1>Defina o valor de venda</h1>
              <p>
                Para escoler o valor que será cobrado é importante você saber o custo do seu produto
                e o lucro que você pretende obter.
              </p>

              <input
                className='currency'
                type='number'
                name='price'
                placeholder='R$ 0,00'
                value={formValues.price}
                onChange={handleFormValues}
              />
            </div>

            <button onClick={increaseStep}>continuar</button>
          </fieldset>
        </div>
      </form>
    </Container>
  );
}

export default Index;
