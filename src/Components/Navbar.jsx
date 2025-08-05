// src/components/Navbar.jsx

import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Navbar.css'; // optional CSS styling

const Navbar = () => {
    const cartCount = useSelector((state) => state.addProductReducer.cartCount);

  return (
    <nav className="navbar">
      <Link to="/" className="brand"> Mini Macro</Link>
      <div className="cart">
        <Link to="/cart"> Cart ({cartCount})</Link>
      </div>
    </nav>
  );
};

export default Navbar;
