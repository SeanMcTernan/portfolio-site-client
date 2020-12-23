import React, { useState, useRef } from "react";
import {
  Button,
  Container,
  Row,
  Col,
  FormGroup,
  FormControl,
  FormLabel,
} from "react-bootstrap";
import { FcCheckmark } from "react-icons/fc";
import logo from "../../images/svgs/logo.svg";
import communications from "../../apis/communications";
import ReCAPTCHA from "react-google-recaptcha";
import LoaderButton from "../elements/LoaderButton";
import onError from "../../libs/errorLib";
import { useAppContext } from "../../libs/contextLib";
import useFormFields from "../../libs/hooksLib";
import validateHuman from "../../apis/googlereCaptcha";
import "../../styles/Contact.css";

const Contact: React.FC = () => {
  const { permissions } = useAppContext();
  const { REACT_APP_reCAPTCHA_SITE_KEY } = process.env;
  const [emailSent, setEmailSent] = useState(false);
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  const reRef = useRef<ReCAPTCHA>(null);

  const { fields, handleFieldChange } = useFormFields({
    type: "contact",
    name: "",
    email: `${permissions.email ? permissions.email : ""}`,
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

  const reCaptcha = async (): Promise<void> => {
    const token = await reRef.current?.executeAsync();
    reRef.current?.reset();
    const human = await validateHuman(token);
    if (!human) {
      onError({ message: "You did not pass the reCaptcha" });
      setIsSendingEmail(false);
      return;
    }

    try {
      await communications(fields);
      setEmailSent(true);
    } catch (error) {
      onError(error);
      setIsSendingEmail(false);
    }
  };

  const handleSendEmailClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSendingEmail(true);
    await reCaptcha();
  };

  const handleGetPhoneClick = () => {
    navigator.clipboard.writeText("+1 250 946 6074");
    showPhone ? setShowPhone(false) : setShowPhone(true);
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
        <Col></Col>
        <Col lg={6}>
          <img
            src={logo}
            style={{ width: "20%", margin: "1vh" }}
            alt="Site Logo"
          />
          <div>
            <ReCAPTCHA
              sitekey={REACT_APP_reCAPTCHA_SITE_KEY!}
              size="invisible"
              ref={reRef}
            />
            {!emailSent ? renderRequestCodeForm() : renderSuccessMessage()}
          </div>
          <p style={{ textAlign: "center" }}>
            <Button
              className="font-weight-light"
              style={{ marginTop: "5vh", color: "var(--mainWhite)" }}
              variant="info"
              type="submit"
              size="lg"
              onClick={handleGetPhoneClick}
            >
              {showPhone
                ? "Copied to clipboard: +1 250-946-6074"
                : "Click to Text or Call"}
            </Button>
          </p>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Contact;
