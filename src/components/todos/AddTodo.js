import React, { useContext, useState } from "react";
import firebase, { firestore, functions, app } from "../../base";
import { AuthContext } from "../Auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

const AddTodo = () => {
  //   const addTodo = functions.httpsCallable("addTodo");
  const todosRef = firestore.collection(`users/${app.currentUser.uid}/todos`);
  const [todos] = useCollectionData(todosRef, { idField: "id" });
  const { currentUser } = useContext(AuthContext);
  const [todo, setTodo] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    todosRef.add({
      text: todo,
      complete: false,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    console.log(todo);
    setTodo("");
  };

  const handleChange = (e) => {
    e.preventDefault();
    let value = e.target.value;
    setTodo(value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="">
        <textarea
          placeholder="write your todo"
          rows="6"
          onChange={handleChange}
        ></textarea>
        <br />
        <button type="submit"> Save </button>
      </form>
    </div>
  );
};

export default AddTodo;
