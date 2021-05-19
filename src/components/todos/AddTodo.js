import React, { useContext, useState } from "react";
import firebase, { firestore, functions, app } from "../../base";
import { AuthContext } from "../Auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Modal from "./Modal";

const AddTodo = () => {
  //   const addTodo = functions.httpsCallable("addTodo");
  const todosRef = firestore.collection(`users/${app.currentUser.uid}/todos`);
  const [todo, setTodo] = useState(null);
  const [error, setError] = useState(null);
  const [modal, setModal] = useState(false);
  const [todoDate, setTodoDate] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo === null || todo === "") {
      setError("todo can't not be blank");
    } else {
      todosRef.add({
        text: todo,
        complete: false,
        date: todoDate,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setTodo("");
      setModal(!modal);
    }

    console.log(todo);
  };

  const handleEdit = () => {
    setModal(!modal);
  };

  const handleChange = (e) => {
    e.preventDefault();
    let value = e.target.value;
    setTodo(value);
  };

  return (
    <div className="addTodo">
      <button className="add_todo" onClick={handleEdit}>
        {" "}
        + AddTodo
      </button>
      <Modal
        displayModal={modal}
        closeModal={handleEdit}
        content={todo}
        handleClick={handleSubmit}
        upDate={(textNew) => setTodo(textNew)}
        setDate={(startDate) => setTodoDate(startDate)}
        date={todoDate}
        buttonType={"Save"}
        error={error}
      />
    </div>
  );
};

export default AddTodo;
