import React, { useContext, useState } from "react";
import firebase, { firestore, functions, app } from "../../base";
import { AuthContext } from "../Auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Modal from "./Modal";

const AddTodo = () => {
  //   const addTodo = functions.httpsCallable("addTodo");
  const todosRef = firestore.collection(`users/${app.currentUser.uid}/todos`);
  const [todo, setTodo] = useState(null);
  const [modal, setModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    todosRef.add({
      text: todo,
      complete: false,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setTodo("");
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
    <div>
      <button onClick={handleEdit}> AddTodo</button>
      <Modal
        displayModal={modal}
        closeModal={handleEdit}
        content={todo}
        handleClick={handleSubmit}
        upDate={(textNew) => setTodo(textNew)}
        buttonType={"Save"}
      />
    </div>
  );
};

export default AddTodo;
