import React, { useContext, useState } from "react";
import { app } from "../base";
import { AuthContext } from "./Auth";
import AddTodo from "./todos/AddTodo";
import TodoList from "./todos/TodoList";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  console.log("curent user:", currentUser);
  const [value, onChange] = useState(new Date());
  console.log(value);
  return (
    <>
      <h1>Home</h1>
      <Calendar onChange={onChange} value={value} />
      <button onClick={() => app.signOut()}>Sign out</button>
      <AddTodo />
      <TodoList selectedDate={value} />
    </>
  );
};

export default Home;
