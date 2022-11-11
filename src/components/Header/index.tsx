import { HiMenuAlt1, HiOutlineSearch } from 'react-icons/hi';
import { Header } from './styles';

function Index() {
  return (
    <Header>
      <button className='menu-btn'>
        <HiMenuAlt1 />
      </button>
      <span>Estoque</span>
      <button className='search-btn'>
        <HiOutlineSearch />
      </button>
    </Header>
  );
}

export default Index;
