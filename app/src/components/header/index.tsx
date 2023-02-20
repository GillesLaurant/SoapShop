import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import Authentification from "../account/Authentification";
import SignInModal from "../account/signinModal";
import Navigation from "./Navigation";

/*****      HEADER     *****/
export default function Header() {
  // States
  const [showModal, setShowModal] = useState(false);
  const [sign, setSignModal] = useState("signin");

  // Handles
  const closeModal = () => {
    setShowModal(false);
  };
  const openModal = (params: string) => {
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

      <Authentification open={openModal} />

      <SignInModal show={showModal} sign={sign} close={closeModal} />
    </header>
  );
}
