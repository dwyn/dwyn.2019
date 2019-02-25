import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Mynavbar = () => {
  return (
    <Navbar bg="dark"  variant="dark">
      <Navbar.Brand href="/">This is a NavBar!</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/posts/new">New Post</Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default Mynavbar;