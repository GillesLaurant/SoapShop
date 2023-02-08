import React, { useState } from "react";
import { Button, Card, Col, Form, InputGroup, Row } from "react-bootstrap";
import soapImg from "../assets/images/05821-small.jpg";

function AddCard() {
  const [card, setCard] = useState(0);
  const handleItems = (params: string) => {
    switch (params) {
      case "+":
        setCard(card + 1);
        break;
      case "-":
        setCard(card - 1);
        break;

      default:
        break;
    }
  };
  return (
    <InputGroup className="inline-flex">
      <Button variant="outline-info" onClick={() => handleItems("+")}>
        +
      </Button>
      <Button variant="info">{"Ajouter " + card}</Button>
      <Button
        variant="outline-info"
        onClick={() => handleItems("-")}
        disabled={card <= 0}
      >
        -
      </Button>
    </InputGroup>
  );
}

function SoapCard() {
  const [details, setDetails] = useState(false);
  const compo = ["sodium", "palmate", "aqua", "glycerin"];

  return (
    <Card className="container col-3 px-1 m-1">
      <Card.Body>
        <Card.Title>SAVON CITRON</Card.Title>

        <Card.Text style={{ display: !details ? "none" : "inline" }}>
          100 g
        </Card.Text>

        <Card.Img variant="top" src={soapImg} />

        <Card.Text className="">
          Authentique et traditionnel, le savon citron est enrichi d'huile
          végétale.
        </Card.Text>
        <Card.Link
          className="d-block pb-3"
          onClick={() => setDetails(!details)}
        >
          Détails...
        </Card.Link>

        <Card.Text style={{ display: !details ? "none" : "inline" }}>
          <span className="d-block pt-3">Composition</span>
          <span>{compo.map((item) => item).join(", ")}</span>
        </Card.Text>

        <Row className="pb-2">
          <Col>3,80 €</Col>
          <Col className="text-muted">(3,17 € HT)</Col>
        </Row>

        <Row className="align-center">
          <AddCard />
          <Form.Check type="checkbox" label="Favories" />
        </Row>
      </Card.Body>
    </Card>
  );
}

export default SoapCard;
