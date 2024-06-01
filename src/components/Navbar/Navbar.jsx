import { Link, NavLink, BrowserRouter as Router, Routes } from 'react-router-dom';
import './nav_bar.css';
import { useState } from 'react';
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";


// 아이콘 : https://react-icons.github.io/react-icons/icons/ai/
// npm install react-icons --save

// npm install react-router-dom

export default function Navbar() {
  
  return (
    <div className='nav-container'>
      <nav className='nav-flex-container'>
        <h2 className='nav-logo'>
          <Link to={'/'}><img src='/coupang_logo.jpg'/></Link>
        </h2>
        <input 
          type='text' 
          name='search' 
          placeholder='찾고싶은 상품을 검색해보세요' 
          className='nav-search-input nav-search-input-large' 

        />
        <ul className='nav-link-ul'>
          <li>
            <NavLink to={'/'} className="nav-link-li"><AiOutlineUser style={{fontSize:'60px'}}/>마이쿠팡</NavLink>
          </li>
          <li>
            <NavLink to={'/'} className="nav-link-li"><AiOutlineShoppingCart style={{fontSize:'60px'}}/>장바구니</NavLink>
          </li>
        </ul>
      </nav>
      <ul className='nav-quick-buttons'>
      <li className='nav-link-li'><NavLink to={'/login'}>로그인</NavLink></li>
        <li className='nav-link-li'><NavLink to={'/'}>퀵버튼1</NavLink></li>
        <li className='nav-link-li'><NavLink to={'/'}>퀵버튼2</NavLink></li>
        <li className='nav-link-li'><NavLink to={'/'}>퀵버튼3</NavLink></li>
        <li className='nav-link-li'><NavLink to={'/'}>퀵버튼4</NavLink></li>
      </ul>
    </div>
  );
}