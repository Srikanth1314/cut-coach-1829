import React from 'react';
import  PropTypes from 'prop-types';
import './Navbar.css';
import { Facart } from "react-icons/fa";


function Navbar(props) {
    const {active} = props;
  return (
    <nav className={`navbar ${active ? 'active':''}`}>
        <div className='navbartop'>
      <div className="navbar-container">
        <div className="navbar-burger">
          <i className="fa fa-bars"></i>
        </div>
        <div className="navbar-location">
          <i className="fa fa-map-marker-alt"></i>
          <span>Location</span>
        </div>
        <div className="navbar-search">
          <input type="text" placeholder="Search" />
          <i className="fa fa-search"></i>
        </div>
        <div className="navbar-cart">
          <i className="fa fa-shopping-cart"></i>
        </div>
        <div className="navbar-signin">
          <button>Sign In</button>
        </div>
        </div>
        <div className='navbarbottom'>
        <div className="navbar-categories">
          <button>Groceries</button>
          <button>Premium Fruits</button>
          <button>Home & Kitchen</button>
          <button>Fashion</button>
          <button>Electronics</button>
          <button>Beauty</button>
          <button>Jewellery</button>
          <button>Home Improvements</button>
          <button>Sport</button>
          <button>Toyes & Luggage</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
    active: PropTypes.bool,
}.isRequired;

export default Navbar;
