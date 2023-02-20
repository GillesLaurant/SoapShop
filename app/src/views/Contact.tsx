import { useState } from "react";
import { Button, Form, Row } from "react-bootstrap";

/*****      NAVIGATION     *****/
export default function Contact() {
  // State
  const [fields, setFields] = useState({
    name: "",
    email: "",
    tel: "",
    message: "",
  });

  // Handle
  const handleFields = (ev: any) => {
    setFields({ ...fields, [ev.target.id]: ev.target.value });
  };

  return (
    <Form>
      <h2 className="contact_title">CONTACT</h2>

      <Row className="mb-3">
        <Form.Group className="col-6">
          {/* NAME */}
          <Form.Label htmlFor="name_contact">Nom</Form.Label>
          <Form.Control
            type="text"
            id="name_contact"
            aria-describedby="nameContactHelpBlock"
            value={fields.name}
            onChange={(e) => handleFields(e)}
          />
          <Form.Text id="nameContactHelpBlock" muted>
            Entrez votre nom.
          </Form.Text>
        </Form.Group>

        {/* EMAIL */}
        <Form.Group className="col-6">
          <Form.Label htmlFor="email_contact">Email</Form.Label>
          <Form.Control
            type="email"
            id="email_contact"
            aria-describedby="emailContactHelpBlock"
            value={fields.email}
            onChange={(e) => handleFields(e)}
          />
          <Form.Text id="emailContactHelpBlock" muted>
            Entrez une adresse email valide..
          </Form.Text>
        </Form.Group>
      </Row>

      {/* PHONE */}
      <Form.Group className="mb-3">
        <Form.Label htmlFor="tel">Téléphone</Form.Label>
        <Form.Control
          type="tel"
          id="tel"
          aria-describedby="telHelpBlock"
          value={fields.tel}
          onChange={(e) => handleFields(e)}
        />
        <Form.Text id="telHelpBlock" muted>
          Entrez votre numéro de téléphone.
        </Form.Text>
      </Form.Group>

      {/* MESSAGE */}
      <Form.Group className="mb-3">
        <Form.Label htmlFor="message">Message</Form.Label>
        <Form.Control
          as="textarea"
          type="text"
          id="message"
          aria-describedby="messageHelpBlock"
          value={fields.message}
          onChange={(e) => handleFields(e)}
        />
        <Form.Text id="messageHelpBlock" muted>
          Entrez votre message.
        </Form.Text>
      </Form.Group>

      {/* SUBMIT */}
      <Button type="submit" variant="outline-success">
        Envoyer
      </Button>
    </Form>
  );
}
