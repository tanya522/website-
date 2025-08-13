import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import ProductDetailPage from './components/ProductDetailPage';
import CategoryPage from './components/CategoryPage';
import CartPage from './components/CartPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/product/:id" element={<ProductDetailPage />} />
      <Route path="/category/:name" element={<CategoryPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
}

export default App;
















