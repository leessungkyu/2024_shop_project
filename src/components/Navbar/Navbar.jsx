import { Link, NavLink, BrowserRouter as Router, Routes } from 'react-router-dom';
import './nav_bar.css';
import { useState } from 'react';
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { SlMagnifier } from "react-icons/sl";


// 아이콘 : https://react-icons.github.io/react-icons/icons/ai/
// npm install react-icons --save

// npm install react-router-dom

export default function Navbar() {

  return (
    <div className='nav-container'>
      <nav className='nav-flex-container'>
        <h2 className='nav-logo'>
          <Link to={'/'}><img src='/img/coupang_logo.jpg'/></Link>
        </h2>
        <div>
        <input 
          type='text' 
          name='search' 
          placeholder='찾고싶은 상품을 검색해보세요' 
          className='nav-search-input nav-search-input-large' 
        />
        <button className='serch_button'><SlMagnifier/></button>
        </div>
        <ul className='nav-link-ul'>
        <li>
          <NavLink to={'/'} className="nav-link-li">
            <div className="icon-container">
              <AiOutlineUser className='icons'/>
              <span>마이쿠팡</span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to={'/'} className="nav-link-li">
            <div className="icon-container">
              <AiOutlineShoppingCart className='icons'/>
              <span>장바구니</span>
            </div>
          </NavLink>
        </li>
        </ul>
      </nav>
      <ul className='nav-quick-buttons'>
      <li className='nav-link-li'><NavLink to={'/login'}>로그인</NavLink></li>
        <li className='nav-link-li'><NavLink to={'/'}><img src='/img/coupang_play.jpg.png'/>쿠팡플레이</NavLink></li>
        <li className='nav-link-li'><NavLink to={'/'}><img src='/img/blue_roket.JPG'/>로켓배송</NavLink></li>
        <li className='nav-link-li'><NavLink to={'/'}><img src='/img/green_roket.JPG'/>로켓프레시</NavLink></li>
        <li className='nav-link-li'><NavLink to={'/'}><img src='/img/puple_roket.JPG'/>로켓직구</NavLink></li>
      </ul>
    </div>
  );
}
