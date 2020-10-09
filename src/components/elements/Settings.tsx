import React, { useState, useEffect } from "react";
import {
  Modal,
  Button,
  Container,
  Row,
  Col,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import "../../styles/Settings.css";

interface Props {
  permissions: any;
  show: boolean;
  onHide: () => void;
}

const Settings: React.FC<Props> = ({ ...props }) => {
  const [isRequested, setIsRequested] = useState(false);
  const renderTooltip = (props: any) => (
    <Tooltip id="button-tooltip" {...props}>
      Click to request access
    </Tooltip>
  );

  var varient = isRequested ? "outline-warning" : "info";
  const handleClick = () => {
    setIsRequested(true);
  };

  return (
    <>
      {!props.permissions ? null : (
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
                    <Button size="sm" variant="info">
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
                  {props.permissions.resume.requested ? (
                    <Button size="sm" disabled variant="outline-warning">
                      Requested
                    </Button>
                  ) : (
                    [
                      true ? (
                        <Button
                          size="sm"
                          variant={varient}
                          disabled={isRequested}
                          onClick={handleClick}
                        >
                          {isRequested ? "Requested" : "Request"}
                        </Button>
                      ) : (
                        <Button size="sm" disabled variant="success">
                          Approved
                        </Button>
                      ),
                    ]
                  )}
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
      )}
    </>
  );
};

export default Settings;
