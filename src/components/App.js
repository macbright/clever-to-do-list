import React from "react";
import { Switch, Router, Route } from "react-router";
import SignIn from "./auth/SignIn";
import ProfilePage from "./ProfilePage";
import SignUp from "./auth/signup";
import PasswordReset from "./auth/PasswordReset";

function App() {
  return (
    // eslint-disable-next-line
    <Switch>
      <Route exact path="/login" component={SignIn} />
      <Route exact path="/user" component={ProfilePage} />
      <Route exact path="/register" component={SignUp} />
      <Route exact path="/passwordReset" component={PasswordReset} />
    </Switch>
  );
}

export default App;
