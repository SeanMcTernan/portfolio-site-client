import { API } from "aws-amplify";
import React, { useState } from "react";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";
import onError from "../../libs/errorLib";
import "../../styles/Settings.css";

interface Props {
  permissions: any;
  show: boolean;
  onHide: () => void;
}

const Settings: React.FC<Props> = ({ ...props }) => {
  const updatePermissions = (values: any) => {
    return API.put("permissions", `/permissions/${props.permissions.permissionsId}`, {
      body: values,
    });
  };

  const [isRequested, setIsRequested] = useState({
    references: false,
    repos: false,
    resume: false,
  });
  
  var referencesVarient = isRequested.references ? "outline-warning" : "info";
  var reposVarient = isRequested.repos ? "outline-warning" : "info";
  var resumeVarient = isRequested.resume ? "outline-warning" : "info";

  const handleClick = async (item: string) => {
    const asyncRequest = async (request: any) => {
      try {
        await updatePermissions(request)
      } catch (e) {
        onError(e);
      }
    }
    switch (item) {
      case "references":
        setIsRequested({ ...isRequested, references: true });
        asyncRequest(1)
        break;
      case "repos":
        setIsRequested({ ...isRequested, repos: true });
        asyncRequest(2);
        break;
      case "resume":
        setIsRequested({ ...isRequested, resume: true });
        asyncRequest(3);
        break;
    }
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
                  {props.permissions.referencesRequested ? (
                    <Button size="sm" disabled variant="outline-warning">
                      Requested
                    </Button>
                  ) : (
                    [
                      !props.permissions.references ? (
                        <Button
                          size="sm"
                          variant={referencesVarient}
                          disabled={isRequested.references}
                          onClick={() => {
                            handleClick("references");
                          }}
                        >
                          {isRequested.references ? "Requested" : "Request"}
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
              <Row className="settingsRows">
                <Col xs={12} md={8} lg={4}>
                  View Hidden Repositories:
                </Col>
                <Col xs={12} md={8} lg={4}>
                  {props.permissions.hiddenreposRequested ? (
                    <Button size="sm" disabled variant="outline-warning">
                      Requested
                    </Button>
                  ) : (
                    [
                      !props.permissions.hiddenrepos ? (
                        <Button
                          size="sm"
                          variant={reposVarient}
                          disabled={isRequested.repos}
                          onClick={() => {
                            handleClick("repos");
                          }}
                        >
                          {isRequested.repos ? "Requested" : "Request"}
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
              <Row className="settingsRows">
                <Col xs={12} md={8} lg={4}>
                  Access Downloadable Resume:
                </Col>
                <Col xs={12} md={8} lg={4}>
                  {props.permissions.resumeRequested ? (
                    <Button size="sm" disabled variant="outline-warning">
                      Requested
                    </Button>
                  ) : (
                    [
                      !props.permissions.resume ? (
                        <Button
                          size="sm"
                          variant={resumeVarient}
                          disabled={isRequested.resume}
                          onClick={() => {
                            handleClick("resume");
                          }}
                        >
                          {isRequested.resume ? "Requested" : "Request"}
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