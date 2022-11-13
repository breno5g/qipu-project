// import { productsData } from 'developmentData';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { EditedProductData, IProduct } from '~/interfaces/product';

interface ProductsContextData {
  products: IProduct[];
  selectedProduct: IProduct | null;
  deleteProduct(id: number): void;
  editProduct(data: EditedProductData): void;
  addProduct(data: IProduct): void;
  selectProduct(data: IProduct | null): void;
}

interface ProductsProviderProps {
  children: ReactNode;
}

const ProductsContenxt = createContext<ProductsContextData>({} as ProductsContextData);

export function ProductsProvider({ children }: ProductsProviderProps) {
  const [products, setProducts] = useState<IProduct[] | []>([]);
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);

  const deleteProduct = (id: number) => {
    const filteredArray = products?.filter((prod) => prod.id != id);
    setProducts(filteredArray);
    saveToLocalStorage('clear');
  };

  const editProduct = (data: EditedProductData) => {
    const editedProductArray = products?.map((prod) =>
      prod.id === data.id ? { ...prod, ...data } : prod,
    );
    const selected = editedProductArray?.filter((prod) => prod.id === data.id);
    selectProduct(selected[0]);
    setProducts(editedProductArray);
  };

  const addProduct = (data: IProduct) => {
    const productHandler = [...products, data];
    setProducts(productHandler);
  };

  const selectProduct = (data: IProduct | null) => {
    setSelectedProduct(data);
  };

  const saveToLocalStorage = (param?: string) => {
    localStorage.setItem('meiStorage', JSON.stringify(param ? [] : products));
  };

  useEffect(() => {
    if (products.length) {
      saveToLocalStorage();
    }
  }, [products]);

  useEffect(() => {
    const storageProducts = localStorage.getItem('meiStorage');

    if (storageProducts?.length) {
      setProducts(JSON.parse(storageProducts));
    }
  }, []);

  return (
    <ProductsContenxt.Provider
      value={{ products, selectedProduct, deleteProduct, editProduct, addProduct, selectProduct }}
    >
      {children}
    </ProductsContenxt.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductsContenxt);

  return context;
}
