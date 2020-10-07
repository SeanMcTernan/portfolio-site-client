import { API } from "aws-amplify";
import React, { useState } from "react";
import {
  Modal,
  Button,
  Container,
  Row,
  Col,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import onError from "../../libs/errorLib";
import "../../styles/Settings.css";

interface Props {
  permissions: any;
  show: boolean;
  onHide: () => void;
}
interface Values {
  references: boolean;
  hiddenrepos: boolean;
  resume: boolean;
  latest: boolean;
}

const Settings: React.FC<Props> = (props) => {
  const logProps = (permissions: any) => {
    console.log(permissions);
  };
  const [isLoading, setIsLoading] = useState(false);
  const renderTooltip = (props: any) => (
    <Tooltip id="button-tooltip" {...props}>
      Click to request access
    </Tooltip>
  );

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
      <Modal.Body className="settingsContent show-grid">
        <Container>
          <p className="settingsParagraph">
            To request access to any items below, please click on the
            corresponding buttons:
          </p>
          <Row className="settingsRows">
            <Col xs={12} md={8} lg={4}>
              View Refences:
            </Col>
            <Col xs={12} md={8} lg={4}>
              <OverlayTrigger
                placement="right"
                delay={{ show: 150, hide: 250 }}
                overlay={renderTooltip}
              >
                <Button
                  size="sm"
                  variant="info"
                  onClick={() => {
                    logProps(props.permissions.latest);
                  }}
                >
                  Request
                </Button>
              </OverlayTrigger>
            </Col>
          </Row>
          <Row className="settingsRows">
            <Col xs={12} md={8} lg={4}>
              View Hidden Repositories:
            </Col>
            <Col xs={12} md={8} lg={4}>
              <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
              >
                <Button size="sm" variant="info">
                  Request
                </Button>
              </OverlayTrigger>
            </Col>
          </Row>
          <Row className="settingsRows">
            <Col xs={12} md={8} lg={4}>
              Access Downloadable Resume:
            </Col>
            <Col xs={12} md={8} lg={4}>
              <Button size="sm" disabled variant="success">
                Approved
              </Button>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer className="settingsContent">
        <Button variant="info" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Settings;
