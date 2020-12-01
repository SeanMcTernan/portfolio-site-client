import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  FormGroup,
  FormControl,
  FormLabel,
  FormText,
} from "react-bootstrap";
import { Auth } from "aws-amplify";
import { Link } from "react-router-dom";
import { FcCheckmark } from "react-icons/fc";
import LoaderButton from "../elements/LoaderButton";
import onError from "../../libs/errorLib";
import useFormFields from "../../libs/hooksLib";
import "../../styles/ResetPassword.css";

const Contact: React.FC = () => {
  const { fields, handleFieldChange } = useFormFields({
    email: "",
    name: "",
    phone: "",
    message: "",
    code: "",
    password: "",
    confirmPassword: "",
  });

  const [codeSent, setCodeSent] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false);
  const [isSendingCode, setIsSendingCode] = useState(false);

  const validateCodeForm = () => {
    return fields.email.length > 0;
  };

  const validateResetForm = () => {
    return (
      fields.code.length > 0 &&
      fields.password.length > 0 &&
      fields.password === fields.confirmPassword
    );
  };
  const handleSendCodeClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSendingCode(true);
    try {
      await Auth.forgotPassword(fields.email);
      setCodeSent(true);
    } catch (error) {
      onError(error);
      setIsSendingCode(false);
    }
  };

  const handleConfirmClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsConfirming(true);
    try {
      await Auth.forgotPasswordSubmit(
        fields.email,
        fields.code,
        fields.password
      );
      setConfirmed(true);
    } catch (error) {
      onError(error);
      setIsConfirming(false);
    }
  };
  const renderRequestCodeForm = () => {
    return (
      <form onSubmit={handleSendCodeClick}>
        <FormGroup controlId="name">
          <FormLabel>Name</FormLabel>
          <FormControl
            size="lg"
            autoFocus
            type="name"
            value={fields.name}
            style={{ marginBottom: "2vh" }}
            onChange={handleFieldChange}
          />
          <FormLabel>Email</FormLabel>
          <FormControl
            placeholder="Email"
            size="lg"
            autoFocus
            type="email"
            value={fields.email}
            style={{ marginBottom: "2vh" }}
            onChange={handleFieldChange}
          />
        </FormGroup>
        <LoaderButton
          block
          type="submit"
          bsSize="large"
          isLoading={isSendingCode}
          disabled={!validateCodeForm()}
        >
          Send Confirmation
        </LoaderButton>
      </form>
    );
  };
  const renderConfirmationForm = () => {
    return (
      <form onSubmit={handleConfirmClick}>
        <FormGroup controlId="code">
          <FormLabel>Confirmation Code</FormLabel>
          <FormControl
            size="lg"
            autoFocus
            type="tel"
            value={fields.code}
            onChange={handleFieldChange}
          />
          <FormText>
            Please check your email ({fields.email}) for the confirmation code.
          </FormText>
        </FormGroup>
        <hr />
        <FormGroup controlId="password">
          <FormLabel>New Password</FormLabel>
          <FormControl
            size="lg"
            type="password"
            value={fields.password}
            onChange={handleFieldChange}
          />
        </FormGroup>
        <FormGroup controlId="confirmPassword">
          <FormLabel>Confirm Password</FormLabel>
          <FormControl
            size="lg"
            type="password"
            value={fields.confirmPassword}
            onChange={handleFieldChange}
          />
        </FormGroup>
        <LoaderButton
          block
          type="submit"
          bsSize="large"
          isLoading={isConfirming}
          disabled={!validateResetForm()}
        >
          Confirm
        </LoaderButton>
      </form>
    );
  };
  const renderSuccessMessage = () => {
    return (
      <div className="success">
        <FcCheckmark className="checkMark" />
        <p>Your password has been reset.</p>
        <p>
          <Link to="/login">
            Click here to login with your new credentials.
          </Link>
        </p>
      </div>
    );
  };
  return (
    <Container className="homeDiv">
      <div className="well well-sm">
        <h3
          className="font-weight-lighter"
          style={{ color: "var(--mainWhite)" }}
        >
          My Location
        </h3>
      </div>
      <Row style={{ paddingBottom: "10vh" }}>
        <Col lg={6} className="col-7">
          <iframe
            style={{ border: "0", width: "100%", height: "30vh" }}
            src="https://www.google.ca/maps/d/u/1/embed?mid=1YGj0yivuv-maQ1gC-QZ3n4T2GWWj6ec5&z=12.5"
          ></iframe>
        </Col>
        <Col lg={6} className="col-7">
          <h4
            className="font-weight-lighter"
            style={{ color: "var(--mainWhite)" }}
          >
            Get in touch
          </h4>
          <div>
            {!codeSent
              ? renderRequestCodeForm()
              : !confirmed
              ? renderConfirmationForm()
              : renderSuccessMessage()}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
