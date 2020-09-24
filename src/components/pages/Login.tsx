import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { Auth } from "aws-amplify";
import LoaderButton from "../elements/LoaderButton";
import { useAppContext } from "../../libs/contextLib";
import "../../styles/Login.css";

const Login: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { userHasAuthenticated } = useAppContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const validateForm = () => {
    return email.length > 0 && password.length > 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await Auth.signIn(email, password);
      userHasAuthenticated(true);
      history.push("/");
    } catch (e) {
      alert(e.message);
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password">
          <FormLabel>PASSWORD</FormLabel>
          <FormControl
            size="lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <LoaderButton
          className=""
          block
          type="submit"
          bsSize="large"
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
