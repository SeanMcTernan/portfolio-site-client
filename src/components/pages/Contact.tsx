import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  FormGroup,
  FormControl,
  FormLabel,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FcCheckmark } from "react-icons/fc";
import LoaderButton from "../elements/LoaderButton";
import onError from "../../libs/errorLib";
import useFormFields from "../../libs/hooksLib";
import "../../styles/ResetPassword.css";

const Contact: React.FC = () => {
  const [emailSent, setEmailSent] = useState(false);
  const [isSendingEmail, setIsSendingEmail] = useState(false);

  const { fields, handleFieldChange } = useFormFields({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const validateCodeForm = () => {
    return (
      fields.name.length > 0 &&
      fields.email.length > 0 &&
      fields.phone.length > 0 &&
      fields.message.length > 10
    );
  };

  const handleSendCodeClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSendingEmail(true);
    try {
      console.log(fields.name, fields.email, fields.phone, fields.message);
      setEmailSent(true);
    } catch (error) {
      onError(error);
      setIsSendingEmail(false);
    }
  };

  const renderRequestCodeForm = () => {
    return (
      <form
        style={{ color: "var(--mainWhite)" }}
        onSubmit={handleSendCodeClick}
      >
        <FormGroup controlId="name">
          <FormLabel className="font-weight-lighter">Name</FormLabel>
          <FormControl
            autoFocus
            type="name"
            value={fields.name}
            style={{ marginBottom: "1vh" }}
            onChange={handleFieldChange}
          />
        </FormGroup>
        <FormGroup controlId="email">
          <FormLabel className="font-weight-lighter">Email</FormLabel>
          <FormControl
            type="email"
            value={fields.email}
            style={{ marginBottom: "1vh" }}
            onChange={handleFieldChange}
          />
        </FormGroup>
        <FormGroup controlId="phone">
          <FormLabel className="font-weight-lighter">Phone</FormLabel>
          <FormControl
            type="phone"
            value={fields.phone}
            style={{ marginBottom: "1vh" }}
            onChange={handleFieldChange}
          />
        </FormGroup>
        <FormGroup controlId="message">
          <FormLabel className="font-weight-lighter">Message</FormLabel>
          <FormControl
            size="lg"
            as="textarea"
            rows={5}
            type="message"
            value={fields.message}
            style={{ marginBottom: "1vh" }}
            onChange={handleFieldChange}
          />
        </FormGroup>
        <LoaderButton
          block
          type="submit"
          bsSize="large"
          isLoading={isSendingEmail}
          disabled={!validateCodeForm()}
        >
          Send Message
        </LoaderButton>
      </form>
    );
  };

  const renderSuccessMessage = () => {
    return (
      <div className="success" style={{ color: "var(--mainWhite)" }}>
        <FcCheckmark className="checkMark" />
        <p>Your message has been sent! I'll be in touch soon.</p>
      </div>
    );
  };
  return (
    <Container className="homeDiv" style={{ paddingBottom: "10vh" }}>
      <Row style={{ paddingBottom: "20vh" }}>
        <Col lg={6} className="col-7">
          <h4
            className="font-weight-lighter"
            style={{ color: "var(--mainWhite)" }}
          >
            Get in touch
          </h4>
          <div>
            {!emailSent ? renderRequestCodeForm() : renderSuccessMessage()}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
