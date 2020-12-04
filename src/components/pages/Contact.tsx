import React, { useState, useRef } from "react";
import {
  Container,
  Row,
  Col,
  FormGroup,
  FormControl,
  FormLabel,
} from "react-bootstrap";
import { FcCheckmark } from "react-icons/fc";
import ReCAPTCHA from "react-google-recaptcha";
import LoaderButton from "../elements/LoaderButton";
import onError from "../../libs/errorLib";
import useFormFields from "../../libs/hooksLib";
import validateHuman from "../../apis/googlereCaptcha";
import "../../styles/Contact.css";

const Contact: React.FC = () => {
  const { REACT_APP_reCAPTCHA_SITE_KEY } = process.env;
  const [emailSent, setEmailSent] = useState(false);
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const reRef = useRef<ReCAPTCHA>(null);

  const { fields, handleFieldChange } = useFormFields({
    name: "Sean Mc Ternan",
    email: "seanmcternan@gmail.com",
    phone: "2509466074",
    message: "This is a new message from the system.",
  });

  const validateCodeForm = () => {
    return (
      fields.name.length > 0 &&
      fields.email.length > 0 &&
      fields.phone.length > 0 &&
      fields.message.length > 10
    );
  };

  const handleSendEmailClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSendingEmail(true);
    const token = await reRef.current?.executeAsync();
    reRef.current?.reset();

    const human = await validateHuman(token);

    if (!human) {
      console.log("We detected a bot");
      return;
    }

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
      <div>
        <h3
          className="font-weight-lighter"
          style={{ color: "var(--mainWhite)" }}
        >
          Get in touch
        </h3>
        <form
          style={{ color: "var(--mainWhite)" }}
          onSubmit={handleSendEmailClick}
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
              rows={3}
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
      </div>
    );
  };

  const renderSuccessMessage = () => {
    return (
      <div>
        <p style={{ textAlign: "center" }}>
          <FcCheckmark
            style={{
              fontSize: "60px",
            }}
          />
          <h3 className="font-weight-lighter">
            Your message has been sent! I'll be in touch soon.
          </h3>
        </p>
      </div>
    );
  };
  return (
    <Container
      className="align-items-center"
      style={{ paddingBottom: "10vh", paddingTop: "10vh" }}
    >
      <Row style={{ paddingBottom: "20vh" }}>
        <Col />
        <Col lg={6}>
          <div>
            <ReCAPTCHA
              sitekey={REACT_APP_reCAPTCHA_SITE_KEY!}
              size="invisible"
              ref={reRef}
            />
            {!emailSent ? renderRequestCodeForm() : renderSuccessMessage()}
          </div>
        </Col>
        <Col />
      </Row>
    </Container>
  );
};

export default Contact;
