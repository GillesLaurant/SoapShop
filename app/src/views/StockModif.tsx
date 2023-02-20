import React, { PropsWithChildren, useState } from "react";
import { Button, Form, InputGroup, Table } from "react-bootstrap";

// TYPES
type PropsTr = PropsWithChildren<{
  name: string;
  quantG: number;
  quantStock: number;
}>;
type PropsTd = PropsWithChildren<{
  quantite: number;
}>;

/*****      TABLE TD     *****/
function Td({ quantite }: PropsTd) {
  // States
  const [change, setChange] = useState(false);
  const [reassort, setReassort] = useState({ rea: 0, resultat: 0 });

  // Handles
  const toggleInput = () => {
    !change && setChange(!change);
  };
  const handleReassort = (ev: any) => {
    const value = ev.target.value;
    if (value < quantite) {
      setReassort({ ...reassort, [ev.target.id]: value });
    }
  };
  const validReassort = (ev: any) => {
    ev.preventDefault();
    const res = quantite - reassort.rea;
    setReassort({ ...reassort, resultat: res });
    setChange(false);
  };

  return (
    <>
      <td onClick={toggleInput}>
        {!change && <span>{reassort.rea < 1 ? "" : reassort.rea}</span>}
        {change && (
          <Form onSubmit={(e) => validReassort(e)}>
            <InputGroup>
              <Form.Control
                type="number"
                id="rea"
                placeholder="Quantité à retirer"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                value={reassort.rea < 1 ? "" : reassort.rea}
                onChange={(e) => handleReassort(e)}
              />
              <Button
                type="submit"
                variant="outline-secondary"
                id="button-addon2"
              >
                Valider
              </Button>
            </InputGroup>
          </Form>
        )}
      </td>
      <td
        style={{
          background:
            reassort.resultat < 100 && reassort.resultat !== 0
              ? "#f23e3eaa"
              : "",
        }}
      >
        {reassort.resultat === 0 ? "" : reassort.resultat}
      </td>
    </>
  );
}

/*****      TABLE TR     *****/
function Tr({ name, quantG, quantStock }: PropsTr) {
  return (
    <tr>
      <td>{name + " " + quantG}</td>
      <td>{quantStock}</td>
      <Td quantite={quantStock} />
    </tr>
  );
}

/*****      TABLE MODIF STOCKS     *****/
export default function StockModif() {
  // State
  const [stock, setStock] = useState([
    {
      name: "Framboise",
      quantG: 100,
      quantStock: 500,
    },
    {
      name: "Framboise",
      quantG: 125,
      quantStock: 200,
    },
    {
      name: "Banane",
      quantG: 100,
      quantStock: 260,
    },
    {
      name: "Banane",
      quantG: 125,
      quantStock: 300,
    },
    {
      name: "Casis",
      quantG: 100,
      quantStock: 100,
    },
    {
      name: "Casis",
      quantG: 125,
      quantStock: 340,
    },
    {
      name: "Anis",
      quantG: 100,
      quantStock: 50,
    },
    {
      name: "Anis",
      quantG: 125,
      quantStock: 150,
    },
    {
      name: "Cerise",
      quantG: 100,
      quantStock: 130,
    },
    {
      name: "Cerise",
      quantG: 125,
      quantStock: 400,
    },
  ]);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Quantité (g)</th>
          <th>Réassort</th>
          <th>Résultat</th>
        </tr>
      </thead>
      <tbody>
        {stock.map((soap) => (
          <Tr
            key={soap.name + soap.quantG}
            name={soap.name}
            quantG={soap.quantG}
            quantStock={soap.quantStock}
          />
        ))}
      </tbody>
    </Table>
  );
}
