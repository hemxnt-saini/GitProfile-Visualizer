import React from "react";
import { Link } from "react-router-dom";
function Navbar(props) {
  return (
    <nav className='navbar bg-black '>
      <h3 className='nav-head'>
        <span>
          <i className='fa fa-github fa-2x'></i>
        </span>
        {props.title}
      </h3>
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
