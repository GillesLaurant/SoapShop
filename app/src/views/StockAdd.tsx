import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

/*****      ADD STOCKS     *****/
export default function StockAdd() {
  // States
  const [product, setProduct] = useState({
    titleProduct: "",
    gramQuant: "",
    description: "",
    composition: "",
    price: 0,
    supplier: "",
    stockQuant: "",
    filePicture: "",
  });

  // Handles
  const handleInputs = (ev: any) => {
    setProduct({ ...product, [ev.target.id]: ev.target.value });
  };

  const priceTVA = (price: number) => {
    let tva = (price * 20) / 100;
    tva = price += tva;
    return Math.round(tva);
  };

  return (
    <div className="container align-center">
      <Form>
        <Row className="mb-3">
          {/* TITLE */}
          <Form.Group className="col-6">
            <Form.Label htmlFor="titleProduct">Titre produit</Form.Label>
            <Form.Control
              type="text"
              id="titleProduct"
              aria-describedby="titleProductHelpBlock"
              value={product.titleProduct}
              onChange={(e) => handleInputs(e)}
            />
            <Form.Text id="titleProductHelpBlock" muted>
              Entrez le titre du produit qui sera affiché.
            </Form.Text>
          </Form.Group>

          {/* SUPPLIER */}
          <Form.Group className="col-6">
            <Form.Label htmlFor="supplier">Fournisseur</Form.Label>
            <Form.Control
              type="text"
              id="supplier"
              aria-describedby="supplierHelpBlock"
              value={product.supplier}
              onChange={(e) => handleInputs(e)}
            />
            <Form.Text id="supplierHelpBlock" muted>
              Entrez la marque du produit.
            </Form.Text>
          </Form.Group>
        </Row>

        {/* DESCRIPTION */}
        <Form.Group className="mb-3">
          <Form.Label htmlFor="description">Description</Form.Label>
          <Form.Control
            as="textarea"
            type="text"
            id="description"
            aria-describedby="descriptionHelpBlock"
            value={product.description}
            onChange={(e) => handleInputs(e)}
          />
          <Form.Text id="descriptionHelpBlock" muted>
            Entrez la description du produit.
          </Form.Text>
        </Form.Group>

        {/* DESCRIPTION */}
        <Form.Group className="mb-3">
          <Form.Label htmlFor="composition">Composition</Form.Label>
          <Form.Control
            type="text"
            id="composition"
            aria-describedby="compositionHelpBlock"
            value={product.composition}
            onChange={(e) => handleInputs(e)}
          />
          <Form.Text id="compositionHelpBlock" muted>
            Entrez votre prénom et votre nom.
          </Form.Text>
        </Form.Group>

        {/* QUANTITY GRAMME */}
        <Row className="mb-3">
          <Form.Group className="col-4">
            <Form.Label htmlFor="gramQuant">Quantité (g)</Form.Label>
            <Form.Control
              type="number"
              id="gramQuant"
              aria-describedby="gramQuantHelpBlock"
              value={product.gramQuant}
              onChange={(e) => handleInputs(e)}
            />
            <Form.Text id="gramQuantHelpBlock" muted>
              Entrez la quantité en gramme d'un produit.
            </Form.Text>
          </Form.Group>

          {/* PRICES */}
          <Form.Group className="col-4">
            <Form.Label htmlFor="price">Prix HT</Form.Label>
            <Row>
              <Col>
                <Form.Control
                  type="number"
                  id="price"
                  aria-describedby="priceHelpBlock"
                  value={product.price}
                  onChange={(e) => handleInputs(e)}
                />
              </Col>
              <Col>
                <Form.Control
                  type="number"
                  id="priceTVA"
                  aria-describedby="priceHelpBlock"
                  value={priceTVA(product.price)}
                  disabled
                />
              </Col>
            </Row>
            <Form.Text id="priceHelpBlock" muted>
              Entrez le prix du produit hors taxes.
            </Form.Text>
          </Form.Group>

          {/* QUANTITY STOCKS */}
          <Form.Group className="col-4 mb-3">
            <Form.Label htmlFor="stockQuant">Quantité stock</Form.Label>
            <Form.Control
              type="number"
              id="stockQuant"
              aria-describedby="stockQuantHelpBlock"
              value={product.stockQuant}
              onChange={(e) => handleInputs(e)}
            />
            <Form.Text id="stockQuantHelpBlock" muted>
              Entrez la quantité entrée en stock du produit.
            </Form.Text>
          </Form.Group>
        </Row>

        {/* PICTURES */}
        <Form.Group controlId="filePicture" className="mb-3">
          <Form.Label>Photos du produit</Form.Label>
          <Form.Control
            type="file"
            value={product.filePicture}
            onChange={(e) => handleInputs(e)}
          />
        </Form.Group>
        <Button type="submit" variant="outline-success">
          Ajouter
        </Button>
      </Form>
    </div>
  );
}
