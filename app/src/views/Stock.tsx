import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import StockAdd from "./StockAdd";
import StockModif from "./StockModif";

/*****      STOCKS     *****/
export default function Stock() {
  // State
  const [nav, setNav] = useState("stock");

  // Handle
  const handleNav = (ev: any) => {
    ev.preventDefault();
    setNav(ev.target.id);
  };

  return (
    <div>
      <Navbar bg="info">
        <Nav>
          <Nav.Link
            href="#stock"
            id="stock"
            onClick={handleNav}
            active={nav === "stock"}
          >
            Afficher le stock
          </Nav.Link>
          <Nav.Link
            href="#stockAdd"
            id="stockAdd"
            onClick={handleNav}
            active={nav === "stockAdd"}
          >
            Ajouter du stock
          </Nav.Link>
          <Nav.Link
            href="#stockModif"
            id="stockModif"
            onClick={handleNav}
            active={nav === "stockModif"}
          >
            Modifier du stock
          </Nav.Link>
        </Nav>
      </Navbar>

      <main className="stock_main mt-3">
        {nav === "stock" && <div className="stock_show">Regarder stock</div>}
        {nav === "stockAdd" && <StockAdd />}
        {nav === "stockModif" && <StockModif />}
      </main>
    </div>
  );
}
