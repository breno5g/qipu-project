import { productsData } from 'developmentData';
import { createContext, ReactNode, useContext, useState } from 'react';
import { EditedProductData, IProduct } from '~/interfaces/product';

interface ProductsContextData {
  products: IProduct[];
  deleteProduct(id: number): void;
  editProduct(data: EditedProductData): void;
}

interface ProductsProviderProps {
  children: ReactNode;
}

const ProductsContenxt = createContext<ProductsContextData>({} as ProductsContextData);

export function ProductsProvider({ children }: ProductsProviderProps) {
  const [products, setProducts] = useState<IProduct[] | []>(productsData);

  const deleteProduct = (id: number) => {
    const filteredArray = products.filter((prod) => prod.id != id);
    setProducts(filteredArray);
  };

  const editProduct = (data: EditedProductData) => {
    const editedProductArray = products.map((prod) =>
      prod.id === data.id ? { ...prod, ...data } : prod,
    );

    setProducts(editedProductArray);
  };

  return (
    <ProductsContenxt.Provider value={{ products, deleteProduct, editProduct }}>
      {children}
    </ProductsContenxt.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductsContenxt);

  return context;
}
