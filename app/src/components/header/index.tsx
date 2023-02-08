import React, { useState } from "react";
import { Button, ButtonGroup, Form, InputGroup } from "react-bootstrap";
import SignInModal from "../account/signinModal";
import Navigation from "./Navigation";

function Header() {
  const [showModal, setShowModal] = useState(false);
  const [sign, setSignModal] = useState("signin");

  const closeModal = () => {
    setShowModal(false);
  };
  const openModal = (params: string) => {
    console.log("YES");
    setShowModal(true);
    setSignModal(params);
  };

  return (
    <header className="container row">
      <Navigation />

      <InputGroup className="header_search col">
        <InputGroup.Text id="search" placeholder="Search">
          Search
        </InputGroup.Text>
        <Form.Control placeholder="Recherche" />
      </InputGroup>

      <ButtonGroup
        className="header_account col px-3"
        aria-label="account_buttons"
      >
        <Button variant="outline-secondary" onClick={() => openModal("signin")}>
          sign in
        </Button>
        <Button variant="outline-secondary" onClick={() => openModal("signup")}>
          sign up
        </Button>
      </ButtonGroup>
      <SignInModal show={showModal} sign={sign} close={closeModal} />
    </header>
  );
}

export default Header;
