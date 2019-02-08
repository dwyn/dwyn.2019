import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <React.Fragment>
      <NavLink to="/" activeClassName="active">Home</NavLink>
      <NavLink to="/posts/new" activeClassName="active">New Post</NavLink>
    </React.Fragment>
  )
}

export default Navbar;