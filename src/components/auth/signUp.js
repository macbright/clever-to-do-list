import React, { useCallback, useState, useContext } from "react";
import { withRouter, useHistory } from "react-router";
import { app } from "../../base";
import { AuthContext } from "../Auth";

const SignUp = () => {
  const [error, setError] = useState(null);
  const history = useHistory();
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password, name } = event.target.elements;
      try {
        await app.createUserWithEmailAndPassword(email.value, password.value);
        let user = app.currentUser;
        user
          .updateProfile({
            displayName: name.value,
          })
          .then(
            function () {},
            function (error) {
              console.log(error);
            }
          );
        history.push("/");
      } catch (error) {
        setError("email or password can not be blank");
        console.log("invalid credentials", error);
      }
    },
    [history]
  );

  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSignUp}>
        <span>{error}</span>
        <br />
        <label>
          Name
          <input name="name" type="text" placeholder="name" />
        </label>
        <br />
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <br />
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default withRouter(SignUp);
