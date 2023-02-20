import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { products } from "../assets/products";
import CarrousselHome from "../components/CarrousselHome";
import ListProducts from "./ListProducts";

/*****      VIEW HOME     *****/
export default function HomePage() {
  const navi = useNavigate();

  return (
    <Container>
      <Row
        style={{ border: "1px solid red" }}
        onClick={() => navi("/boutique/savon_marseille")}
      >
        <h2 className="home_soaps">Savons</h2>
        <CarrousselHome products={products} time={1100} />
      </Row>
      <Row>
        <h2 className="home_soaps">Douche</h2>
        <CarrousselHome products={products} time={1500} />
      </Row>
      <Row>
        <h2 className="home_soaps">Corps</h2>
        <CarrousselHome products={products} time={1700} />
      </Row>
    </Container>
  );
}
