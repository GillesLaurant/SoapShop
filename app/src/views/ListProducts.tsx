import React from "react";
import { Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { products } from "../assets/products";
import SoapCard from "../components/SoapCard";

function ListProducts() {
  const urlParams = useParams();
  console.log(urlParams);

  return (
    <Row className="container row justify-content-evenly">
      {products.map((soap: any, id: number) => (
        <SoapCard
          key={id}
          title={soap.title}
          quantGr={soap.quantGr}
          textDescription={soap.textDescription}
          arrayCompo={soap.arrayCompo}
          price={soap.price}
          img={soap.img}
        />
      ))}
    </Row>
  );
}

export default ListProducts;
