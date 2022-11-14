import { productsData } from 'developmentData';

export const storageMock = {
  meiStorageProducts: JSON.stringify([...productsData]),
  meiStorageCategories: JSON.stringify(['Bebida', 'Comida', 'Farofa']),
};
