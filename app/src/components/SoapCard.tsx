import React, { PropsWithChildren, useState } from "react";
import { Button, Card, Col, InputGroup, Row } from "react-bootstrap";
import ImgModal from "./ImgModal";

// TYPES
type PropsCard = PropsWithChildren<{
  title: string;
  quantGr: string;
  textDescription: string;
  arrayCompo: string[];
  price: string;
  img: any;
}>;

/*****      ADD TO COMMAND     *****/
function AddCard() {
  // State
  const [card, setCard] = useState(0);

  // Handles
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
    <InputGroup className="d-block">
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

/*****      CARD SOAP     *****/
export default function SoapCard({
  title,
  quantGr,
  textDescription,
  arrayCompo,
  price,
  img,
}: PropsCard) {
  // States
  const [details, setDetails] = useState(false);
  const [activeImg, setActiveImg] = useState(false);

  // Handle
  const toggleImg = () => {
    setActiveImg(!activeImg);
  };

  return (
    <Card
      style={{ width: "20%", minWidth: "250px" }}
      className="container col-auto px-1 m-1"
    >
      <Card.Body>
        <Card.Title>{title}</Card.Title>

        <Card.Text style={{ display: !details ? "none" : "inline" }}>
          {quantGr + "  g"}
        </Card.Text>

        <Card.Img variant="top" src={img} onClick={() => toggleImg()} />

        <Card.Text className="">{textDescription}</Card.Text>

        <Card.Link
          className="d-block pb-3"
          onClick={() => setDetails(!details)}
        >
          Détails...
        </Card.Link>

        <Card.Text style={{ display: !details ? "none" : "inline" }}>
          <span className="d-block pt-3">Composition</span>
          <span>{arrayCompo.map((item) => item).join(", ")}</span>
        </Card.Text>

        <Row className="pb-2">
          <Col>{price + "  €"}</Col>
          <Col className="text-muted">{price + "  €  HT"}</Col>
        </Row>

        <Row className="">
          <AddCard />
        </Row>

        <ImgModal show={activeImg} img={img} title={title} close={toggleImg} />
      </Card.Body>
    </Card>
  );
}
