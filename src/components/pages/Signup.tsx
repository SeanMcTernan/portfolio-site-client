import { Auth, API } from "aws-amplify";
import { ISignUpResult } from "amazon-cognito-identity-js";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FormGroup, FormControl, FormLabel, FormText } from "react-bootstrap";
import LoaderButton from "../elements/LoaderButton";
import onError from "../../libs/errorLib";
import { useAppContext } from "../../libs/contextLib";
import useFormFields from "../../libs/hooksLib";
import "../../styles/Signup.css";

interface Values {
  references: boolean;
  hiddenrepos: boolean;
  resume: boolean;
  latest: boolean;
}

const Signup: React.FC = () => {
  const { fields, handleFieldChange } = useFormFields({
    email: "",
    password: "",
    confirmPassword: "",
    confirmationCode: "",
  });

  const history = useHistory();
  const [newUser, setNewUser] = useState<ISignUpResult | null>(null);
  const { userHasAuthenticated, setPermissions } = useAppContext();
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    return (
      fields.email.length > 0 &&
      fields.password.length > 0 &&
      fields.password === fields.confirmPassword
    );
  };

  const setDBPermissions = (values: Values) => {
    return API.post("permissions", "/permissions", {
      body: values,
    });
  };

  const validateConfirmationForm = () => {
    return fields.confirmationCode.length > 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const newUser = await Auth.signUp({
        username: fields.email,
        password: fields.password,
      });
      setIsLoading(false);
      setNewUser(newUser);
    } catch (e) {
      onError(e);
      setIsLoading(false);
    }
  };

  const handleConfirmationSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const values = {
        email: fields.email,
        references: false,
        referencesRequested: false,
        hiddenrepos: false,
        hiddenreposRequested: false,
        resume: true,
        resumeRequested: false,
        latest: false,
      };
      await Auth.confirmSignUp(fields.email, fields.confirmationCode);
      await Auth.signIn(fields.email, fields.password);
      await setDBPermissions(values);
      await API.get("permissions", "/permissions").then((response) => {
        setPermissions(response[0]);
      });
      userHasAuthenticated(true);
      history.push("/");
    } catch (e) {
      onError(e);
      setIsLoading(false);
    }
  };
  const renderConfirmationForm = () => {
    return (
      <form onSubmit={handleConfirmationSubmit}>
        <FormGroup controlId="confirmationCode">
          <FormLabel>Confirmation Code</FormLabel>
          <FormControl
            size="lg"
            autoFocus
            type="tel"
            onChange={handleFieldChange}
            value={fields.confirmationCode}
          />
          <FormText>Please check your email for the code.</FormText>
        </FormGroup>
        <LoaderButton
          block
          type="submit"
          bsSize="large"
          isLoading={isLoading}
          disabled={!validateConfirmationForm()}
        >
          Verify
        </LoaderButton>
      </form>
    );
  };
  const renderForm = () => {
    return (
      <form onSubmit={handleSubmit}>
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
        <FormGroup controlId="password">
          <FormLabel>Password</FormLabel>
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
            onChange={handleFieldChange}
            value={fields.confirmPassword}
          />
        </FormGroup>
        <LoaderButton
          block
          type="submit"
          bsSize="large"
          isLoading={isLoading}
          disabled={!validateForm()}
        >
          Signup
        </LoaderButton>
      </form>
    );
  };
  return (
    <div className="Signup">
      {newUser === null ? renderForm() : renderConfirmationForm()}
    </div>
  );
};

export default Signup;
