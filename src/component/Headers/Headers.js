import React from 'react';
import logo from '../../images/logo.png'
import './Headers.css'
const Headers = () => {
  return (
    <div className="header">
      
      <img className="logo" src={logo} alt="" />
      <nav>
        <a href="/shop">Shop</a>
        <a href="/order">Order Review</a>
        <a href="/inventory">Manage Inventory here</a>
      </nav>
    </div>
  );
};

export default Headers;