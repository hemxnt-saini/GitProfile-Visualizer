import React from "react";
import { Link } from "react-router-dom";
function Navbar(props) {
  return (
    <nav className='navbar bg-black '>
      <span>
        <i className='fa fa-github fa-3x'></i>
      </span>
      <h3 className='nav-head'>{props.title}</h3>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
