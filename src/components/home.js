import React from "react";
import { Switch, Router, Route } from "react-router";
import SignIn from "./auth/SignIn";
import ProfilePage from "./ProfilePage";

function Home() {
  const user = null;
  return user ? <ProfilePage /> : <h2> sign in page</h2>;
}

export default home;
