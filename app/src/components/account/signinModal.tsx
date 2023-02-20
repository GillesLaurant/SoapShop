import { PropsWithChildren, useContext, useState } from "react";
import { Button, Card, Form, Modal, Row } from "react-bootstrap";
import { UserContext } from "../../context/AdminContext";

// TYPES
type Props = PropsWithChildren<{
  show: boolean;
  sign: string;
  close: Function;
}>;
type PropsSign = PropsWithChildren<{
  sign: string;
  closeModal: Function;
}>;
type PropsLog = PropsWithChildren<{
  closeModal: Function;
}>;

/****   Forms SignIn & SignUp    ****/
function FormSign({ sign, closeModal }: PropsSign) {
  // Context
  const { userLog, toggleLog } = useContext(UserContext);
  // States
  const [formSign, setFormSign] = useState({
    name: "",
    email: "",
    password: "",
    confirmPwd: "",
  });

  // Handles
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
  const handleSubmit = (ev: any) => {
    ev.preventDefault();
    if (sign === "signin") {
      toggleLog("loggin", !userLog.loggin);
    }

    if (sign === "signup") {
      toggleLog("admin", !userLog.admin);
    }
    closeModal();
  };

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
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

/*****      Form Loggout     *****/
function FormLoggout({ closeModal }: PropsLog) {
  // Context
  const { userLog, toggleLog } = useContext(UserContext);

  // Handle
  const handleLoggout = (ev: any) => {
    ev.preventDefault();
    if (userLog.loggin) {
      toggleLog("loggin", false);
    }
    if (userLog.admin) {
      toggleLog("admin", false);
    }
    closeModal();
  };

  return (
    <Form onSubmit={(ev) => handleLoggout(ev)}>
      <Row>
        <Card.Text>Etes-vous sûr de vouloir nous quitter ?</Card.Text>
      </Row>
      <Row className="justify-content-evenly mt-4">
        <Button
          className="col-4"
          variant="danger"
          type="reset"
          onClick={() => closeModal()}
        >
          Retour
        </Button>

        <Button className="col-4" variant="primary" type="submit">
          Déconnecter
        </Button>
      </Row>
    </Form>
  );
}

/****    Modals SignIn & SignUp & Loggout    ****/
export default function SignInModal({ show, sign, close }: Props) {
  // Handle
  const handleClose = () => close();

  return (
    <Modal
      show={show}
      onHide={handleClose}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        {sign !== "loggout" && (
          <Modal.Title>
            {sign === "signin" ? "S'inscrire" : "Se connecter"}
          </Modal.Title>
        )}
        {sign === "loggout" && <Modal.Title>Se deconnecter</Modal.Title>}
      </Modal.Header>

      <Modal.Body>
        {sign !== "loggout" && <FormSign sign={sign} closeModal={close} />}
        {sign === "loggout" && <FormLoggout closeModal={close} />}
      </Modal.Body>
    </Modal>
  );
}
