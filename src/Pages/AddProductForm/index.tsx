import React, { useState } from 'react';
import Select from 'react-select';
import { Container } from './style';

function Index() {
  const [step, setStep] = useState(0);

  const increaseStep = (event: React.FormEvent) => {
    event.preventDefault();
    if (step != 5) {
      setStep((prevstate) => prevstate + 1);
    }
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

              <input type='text' />
            </div>

            <button onClick={increaseStep}>continuar</button>
          </fieldset>
          <fieldset>
            <div className='top-content'>
              <span>◯◯⬤⬤⬤⬤</span>
              <h1>Escreva quantos produtos você tem no estoque</h1>
              <p>A quantidade ficará armazaenada para você controlar o seu estoque.</p>

              <input type='number' />
            </div>

            <button onClick={increaseStep}>continuar</button>
          </fieldset>
          <fieldset>
            <div className='top-content'>
              <span>◯◯◯⬤⬤⬤</span>
              <h1>Descreva seu produto</h1>
              <p>Coloque detalhes sobre o que está sendo oferecido.</p>

              <input type='text' />
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

              <Select
                isMulti
                name='categories'
                closeMenuOnSelect={false}
                placeholder={'Selecione as Categorias'}
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

              <input className='currency' type='number' placeholder='R$ 0,00' />
            </div>

            <button onClick={increaseStep}>continuar</button>
          </fieldset>
        </div>
      </form>
    </Container>
  );
}

export default Index;
