import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { useHistory } from "react-router-dom";
import { FormGroup, FormControl, FormLabel } from "react-bootstrap";
import LoaderButton from "../elements/LoaderButton";
import { useAppContext } from "../../libs/contextLib";
import { Link } from "react-router-dom";
import useFormFields from "../../libs/hooksLib";
import onError from "../../libs/errorLib";
import "../../styles/Login.css";

const Login: React.FC = () => {
  const history = useHistory();
  const { userHasAuthenticated } = useAppContext();
  const [isLoading, setIsLoading] = useState(false);
  const { fields, handleFieldChange } = useFormFields({
    email: "",
    password: "",
  });

  const validateForm = () => {
    return fields.email.length > 0 && fields.password.length > 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await Auth.signIn(fields.email, fields.password);
      userHasAuthenticated(true);
      history.push("/");
    } catch (e) {
      onError(e);
      setIsLoading(false);
    }
  };

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email">
          <FormLabel>EMAIL</FormLabel>
          <FormControl
            size="lg"
            autoFocus
            type="email"
            value={fields.email}
            onChange={handleFieldChange}
          />
        </FormGroup>
        <FormGroup controlId="password">
          <FormLabel>PASSWORD</FormLabel>
          <FormControl
            size="lg"
            value={fields.password}
            onChange={handleFieldChange}
            type="password"
          />
        </FormGroup>
        <Link
          to="/reset"
          style={{ color: "white", textDecorationLine: "underline" }}
        >
          Forgot password?
        </Link>
        <LoaderButton
          block
          type="submit"
          bsSize="small"
          isLoading={isLoading}
          disabled={!validateForm()}
        >
          Login
        </LoaderButton>
      </form>
    </div>
  );
};

export default Login;
