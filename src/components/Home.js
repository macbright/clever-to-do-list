import React, { useContext } from "react";
import { app } from "../base";
import { AuthContext } from "./Auth";
import AddTodo from "./todos/AddTodo";

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  console.log("curent user:", currentUser);
  return (
    <>
      <h1>Home</h1>
      <button onClick={() => app.signOut()}>Sign out</button>
      <AddTodo />
    </>
  );
};

export default Home;
