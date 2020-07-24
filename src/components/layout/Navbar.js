import React from "react";

function Navbar(props) {
  return (
    <nav className='navbar bg-primary '>
      <h1>
        <i className='fa fa-github'></i>
        {props.title}
      </h1>
    </nav>
  );
}

export default Navbar;
