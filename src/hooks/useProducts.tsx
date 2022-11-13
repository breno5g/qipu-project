// import { productsData } from 'developmentData';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { EditedProductData, IProduct } from '~/interfaces/product';

interface ProductsContextData {
  products: IProduct[];
  categories: string[];
  selectedProduct: IProduct | null;
  deleteProduct(id: number): void;
  editProduct(data: EditedProductData): void;
  addProduct(data: IProduct): void;
  addCategorie(data: string): void;
  selectProduct(data: IProduct | null): void;
}

interface ProductsProviderProps {
  children: ReactNode;
}

const ProductsContenxt = createContext<ProductsContextData>({} as ProductsContextData);

export function ProductsProvider({ children }: ProductsProviderProps) {
  const [products, setProducts] = useState<IProduct[] | []>([]);
  const [categories, setCategories] = useState<string[]>([]);
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

  const addCategorie = (data: string) => {
    const handler = [...categories, data];
    setCategories(handler);
    localStorage.setItem('meiStorageCategories', JSON.stringify(handler));
  };

  const saveToLocalStorage = (param?: string) => {
    localStorage.setItem('meiStorageProducts', JSON.stringify(param ? [] : products));
  };

  useEffect(() => {
    if (products.length) {
      saveToLocalStorage();
    }
  }, [products]);

  useEffect(() => {
    const storageProducts = localStorage.getItem('meiStorageProducts');
    const storageCategories = localStorage.getItem('meiStorageCategories');

    if (storageProducts?.length) {
      setProducts(JSON.parse(storageProducts));
    }
    if (storageCategories?.length) {
      setCategories(JSON.parse(storageCategories));
    }
  }, []);

  return (
    <ProductsContenxt.Provider
      value={{
        products,
        categories,
        selectedProduct,
        deleteProduct,
        editProduct,
        addProduct,
        addCategorie,
        selectProduct,
      }}
    >
      {children}
    </ProductsContenxt.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductsContenxt);

  return context;
}
