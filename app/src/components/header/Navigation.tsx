import React from "react";
import { Nav } from "react-bootstrap";

function Navigation() {
  return (
    <Nav className="header_nav col-6 d-flex justify-content-evenly">
      <Nav.Item>
        <Nav.Link href="/">Parfums</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/stock">Stock</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="">Bio</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="">Soins</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navigation;
