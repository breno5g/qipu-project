export type IProduct = {
  id: number;
  name: string;
  quantity: number;
  description: string;
  image: string;
  price: number;
  categories: string[];
};

export type EditedProductData = Omit<IProduct, 'name' | 'image'>;
