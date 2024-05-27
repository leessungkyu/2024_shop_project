
import './App.css';
import { Route, Router, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/home/HomePage';
import LoginPage from './pages/login/LoginPage';
import DetailPage from './pages/detail/DetailPage';

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
      </Routes> 
    </div>
  );
}

export default App;
