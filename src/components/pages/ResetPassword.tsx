import { Auth } from "aws-amplify";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { FormGroup, FormControl, FormLabel, FormText } from "react-bootstrap";
import { FcCheckmark } from "react-icons/fc";
import LoaderButton from "../elements/LoaderButton";
import onError from "../../libs/errorLib";
import useFormFields from "../../libs/hooksLib";
import "../../styles/ResetPassword.css";

const ResetPassword: React.FC = () => {
  const { fields, handleFieldChange } = useFormFields({
    code: "",
    email: "",
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
        <FormGroup controlId="email">
          <FormLabel>Email</FormLabel>
          <FormControl
            size="lg"
            autoFocus
            type="email"
            value={fields.email}
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
    <div className="ResetPassword">
      {!codeSent
        ? renderRequestCodeForm()
        : !confirmed
        ? renderConfirmationForm()
        : renderSuccessMessage()}
    </div>
  );
};

export default ResetPassword;
