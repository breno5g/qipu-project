import { useEffect, useState } from 'react';
import ProductDetails from '../../components/ProductDetails';
import Header from '../../components/Header';
import { IProduct } from '../../interfaces/product';
import ProductList from '../../components/ProductList';
import AddProductButton from '../../components/AddProductButton';
import { useProducts } from '../../hooks/useProducts';

function Home() {
  const { products, selectedProduct, selectProduct, deleteProduct } = useProducts();
  const [filteredProdutcs, setFilteredProducts] = useState<IProduct[] | []>(products);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSelectProduct = (data: IProduct | null) => {
    selectProduct(data);
  };

  const handleDeleteProduct = (id: number) => {
    deleteProduct(id);
    handleSelectProduct(null);
  };

  const handleSearchTerm = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTerm(value);
  };

  useEffect(() => {
    const filteredProducts = products.filter((prod) =>
      prod.name.toLowerCase().includes(searchTerm.trim()),
    );
    setFilteredProducts(filteredProducts);
  }, [products, searchTerm]);

  return (
    <>
      <Header value={searchTerm} handleSearchTerm={handleSearchTerm} clearSearch={setSearchTerm} />
      <ProductList products={filteredProdutcs} handleSelectProduct={handleSelectProduct} />
      {selectedProduct && (
        <ProductDetails close={handleSelectProduct} deleteProduct={handleDeleteProduct} />
      )}
      <AddProductButton />
    </>
  );
}

export default Home;
