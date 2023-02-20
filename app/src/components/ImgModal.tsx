import { PropsWithChildren } from "react";
import { Button, Image, Modal } from "react-bootstrap";

// TYPES
type Props = PropsWithChildren<{
  show: boolean;
  img: string;
  title: string;
  close: Function;
}>;

/*****      MODAL IMAGE     *****/
export default function ImgModal({ show, img, title, close }: Props) {
  return (
    <Modal
      show={show}
      onHide={() => close()}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="align-center">
        <Image src={img} fluid className="d-block h-100 m-auto" />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-success" onClick={() => close()}>
          Fermer
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
