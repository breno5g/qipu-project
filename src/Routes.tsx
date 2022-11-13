import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import AddProductForm from './Pages/AddProductForm';

function Router() {
  return (
    <>
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<AddProductForm />} path='/newproduct' />
      </Routes>
    </>
  );
}

export default Router;
