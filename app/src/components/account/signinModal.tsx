import { PropsWithChildren, useState } from "react";
import { Button, Form, Modal, Row } from "react-bootstrap";

// TYPES
type Props = PropsWithChildren<{
  show: boolean;
  sign: string;
  close: Function;
}>;
type PropsSign = PropsWithChildren<{
  sign: string;
}>;

/****    COMPONENT Forms SignIn & SignUp    ****/
function FormSign({ sign }: PropsSign) {
  // Fields
  const [formSign, setFormSign] = useState({
    name: "",
    email: "",
    password: "",
    confirmPwd: "",
  });

  const handleInputs = (ev: any) => {
    setFormSign({ ...formSign, [ev.target.id]: ev.target.value });
  };

  const handleReset = () => {
    setFormSign({
      name: "",
      email: "",
      password: "",
      confirmPwd: "",
    });
  };

  return (
    <Form>
      {/* only SignIn */}
      {sign !== "signup" && (
        <Form.Group>
          <Form.Label htmlFor="name">Prénom et Nom</Form.Label>
          <Form.Control
            type="text"
            id="name"
            aria-describedby="nameHelpBlock"
            value={formSign.name}
            onChange={(e) => handleInputs(e)}
          />
          <Form.Text id="nameHelpBlock" muted>
            Entrez votre prénom et votre nom.
          </Form.Text>
        </Form.Group>
      )}

      <Form.Group>
        <Form.Label htmlFor="inputEmail">Email</Form.Label>
        <Form.Control
          type="email"
          id="email"
          aria-describedby="emailHelpBlock"
          value={formSign.email}
          onChange={(e) => handleInputs(e)}
        />
        <Form.Text id="emailHelpBlock" muted>
          Entrez une adresse mail valide.
        </Form.Text>
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor="inputPassword5">Mot de passe</Form.Label>
        <Form.Control
          type="password"
          id="password"
          aria-describedby="passwordHelpBlock"
          value={formSign.password}
          onChange={(e) => handleInputs(e)}
        />
        <Form.Text id="passwordHelpBlock" muted>
          Votre mot de passe doit être composé de 8 à 20 caractères, contenir
          des lettres et chiffres et ne doivent pas contenir d'espaces, de
          caractères spéciaux ou d'emoji.
        </Form.Text>
      </Form.Group>

      {/* only SignIn */}
      {sign !== "signup" && (
        <Form.Group>
          <Form.Label htmlFor="inputConfirmPwd">
            Confirmez votre mot de passe
          </Form.Label>
          <Form.Control
            type="password"
            id="confirmPwd"
            aria-describedby="passwordHelpBlock"
            value={formSign.confirmPwd}
            onChange={(e) => handleInputs(e)}
          />
          <Form.Text id="passwordHelpBlock" muted>
            Votre mot de passe doit être composé de 8 à 20 caractères, contenir
            des lettres et chiffres et ne doivent pas contenir d'espaces, de
            caractères spéciaux ou d'emoji.
          </Form.Text>
        </Form.Group>
      )}

      <Row className="justify-content-evenly mt-4">
        <Button
          className="col-4"
          variant="danger"
          type="reset"
          onClick={handleReset}
        >
          Reset
        </Button>

        <Button className="col-4" variant="primary" type="submit">
          {sign === "signin" ? "S'inscrire" : "Se connecter"}
        </Button>
      </Row>
    </Form>
  );
}

/****    COMPONENT Modals SignIn & SignUp    ****/
function SignInModal({ show, sign, close }: Props) {
  const handleClose = () => close();

  return (
    <Modal
      show={show}
      onHide={handleClose}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>
          {sign === "signin" ? "S'inscrire" : "Se connecter"}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <FormSign sign={sign} />
      </Modal.Body>
    </Modal>
  );
}

export default SignInModal;
