import React, { useCallback, useContext, useState } from "react";
import { withRouter, Redirect, useHistory } from "react-router";
import { app } from "../../base.js";
import { AuthContext } from "../Auth";

const Login = () => {
  const [error, setError] = useState(null);
  const history = useHistory();
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app.signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        setError("Incorrect email address or password");
        console.log("Incorrect email address or password", error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h1>Log in</h1>
      <form onSubmit={handleLogin}>
        <spa>{error}</spa>
        <br />
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default withRouter(Login);
