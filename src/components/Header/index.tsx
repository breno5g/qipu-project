import { useState } from 'react';
import { HiMenuAlt1, HiOutlineSearch } from 'react-icons/hi';
import { Header } from './styles';

function Index() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const handleSearchVisibility = () => {
    setIsSearchVisible((prevstate) => !prevstate);
  };

  return (
    <Header>
      <div className='top-container'>
        <button className='menu-btn'>
          <HiMenuAlt1 />
        </button>
        <span>Estoque</span>
        <button className='search-btn' onClick={handleSearchVisibility}>
          <HiOutlineSearch />
        </button>
      </div>
      {isSearchVisible && (
        <input
          type='text'
          name='search-input'
          className='search-input'
          placeholder='Insira o nome do produto'
          onChange={() => []}
        />
      )}
    </Header>
  );
}

export default Index;
