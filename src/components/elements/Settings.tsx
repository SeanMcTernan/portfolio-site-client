import React from "react";
import { Modal, Button } from "react-bootstrap";
import "../../styles/Settings.css";

interface Props {
  show: boolean;
  onHide: () => void;
}

const Settings: React.FC<Props> = (props) => {
  return (
    <Modal
      backdrop="static"
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="settingsContent" closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="settingsContent"
        >
          Settings:
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="settingsContent">
        <h4 className="settingsContent">Centered Modal</h4>
        <p className="settingsContent">
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer className="settingsContent">
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Settings;
