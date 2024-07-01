//Dependencies
import React from 'react';
import {NavLink} from 'react-router-dom';
//Internals
import './index.css';

const Header = () => (
  <div className="header">
    <h1 id="header-title">Shop Now</h1>
    <h3 id="header-title1">React ECommerce WebApp developed by SHASHANK KENY for Solar Square</h3>
    <div className="links-header">
      <p><NavLink activeClassName="selected" className="nav-link-header" to="/women">Women</NavLink></p>
      <p><NavLink activeClassName="selected" className="nav-link-header" to="/men">Men</NavLink></p>
      <p><NavLink activeClassName="selected" className="nav-link-header" to="/clothes">Clothes</NavLink></p>
      <p><NavLink activeClassName="selected" className="nav-link-header" to="/accessories">Accessories</NavLink></p>
    </div>
  </div>
)

export default Header;
