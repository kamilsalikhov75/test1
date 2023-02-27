import { Routes, Route } from 'react-router-dom';

import './App.css';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { link } from './const';
import { Catalog } from './pages/catalog/Catalog';
import { Error } from './pages/error/Error';
import { Likes } from './pages/likes/Likes';
import { Main } from './pages/main/Main';
import { Product } from './pages/product/Product';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={link.home} element={<Main />} />
        <Route path={link.likes} element={<Likes />} />
        <Route path={link.male} element={<Catalog gender="male" />} />
        <Route path={link.female} element={<Catalog gender="female" />} />
        <Route path={link.product} element={<Product />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
