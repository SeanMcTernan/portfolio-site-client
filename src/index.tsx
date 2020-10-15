import { Amplify } from "aws-amplify";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import config from "./config";
import App from "./App";
import { InfoProvider } from "./libs/contextLib";
import "./styles/Index.css";
import * as serviceWorker from "./serviceWorker";

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    identityPoolId: config.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID,
  },
  API: {
    endpoints: [
      {
        name: "permissions",
        endpoint: config.apiGateway.URL,
        region: config.apiGateway.REGION,
      },
    ],
  },
});

ReactDOM.render(
  <InfoProvider>
    <Router>
      <App />
    </Router>
  </InfoProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
