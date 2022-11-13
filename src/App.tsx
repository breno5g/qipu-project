import { productsData } from 'developmentData';
import { useEffect, useState } from 'react';
import ProductDetails from './components/FoodDetails';
import Header from './components/Header';
import { IProduct } from './interfaces/product';
import ProductList from './components/ProductList';
import AddProductButton from './components/AddProductButton';
import EditProductModal from './components/EditProductModal';

function App() {
  const [products, setProducts] = useState<IProduct[] | []>(productsData);
  const [filteredProdutcs, setFilteredProducts] = useState<IProduct[] | []>(products);
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSelectProduct = (product: IProduct) => {
    setSelectedProduct(product);
  };

  const handleDeleteProduct = (id: number) => {
    const filteredArray = products.filter((prod) => prod.id != id);
    setProducts(filteredArray);
    closeProductDetails();
  };

  const closeProductDetails = () => {
    setSelectedProduct(null);
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
        <ProductDetails
          product={selectedProduct}
          close={closeProductDetails}
          deleteProduct={handleDeleteProduct}
        />
      )}
      <AddProductButton />
      <EditProductModal />
    </>
  );
}

export default App;
