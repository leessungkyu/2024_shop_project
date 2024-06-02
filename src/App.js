
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/home/HomePage';
import LoginPage from './pages/login/LoginPage';
import DetailPage from './pages/detail/DetailPage';
import ContactPage from './pages/contact/ContactPage';
import InquiryPage from './pages/contact/InquiryPage';
import FaqPage from './pages/contact/FaqPage';
import CartPage from './pages/cart/CartPage';

function App() {
  const location = useLocation();
  const { pathname } = location;  

  return (
    <div className="App">
      {pathname!=="/login"?<Navbar/>: null}
      
      <Routes>
         <Route path="/"           element={<HomePage />}   />
         <Route path="/login"      element={<LoginPage />}  />
         <Route path="/detail/:id" element={<DetailPage />} />
         <Route path="/contact" element={<ContactPage />}>
           <Route path="inquiry" element={<InquiryPage />} />
           <Route path="faq" element={<FaqPage />} />
         </Route>
         <Route path="/cart" element={<CartPage />} />
      </Routes> 
    </div>
  );
}

export default App;
