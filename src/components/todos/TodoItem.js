import React, { useContext, useState } from "react";
import firebase, { firestore, functions, app } from "../../base";
import { AuthContext } from "../Auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import PropTypes from "prop-types";
import Modal from "./Modal";

const TodoItem = (todo) => {
  //   const addTodo = functions.httpsCallable("addTodo");
  const todosRef = firestore.collection(`users/${app.currentUser.uid}/todos`);
  const [checked, setChecked] = useState(todo.todo.complete);
  const [modal, setModal] = useState(false);
  const [newText, setNewText] = useState(null);
  const [todoDate, setTodoDate] = useState(todo.todo.date.toDate());

  const { id, text, complete } = todo.todo;
  const onCompleteTodo = (id, complete) =>
    todosRef.doc(id).set({ complete: !complete }, { merge: true });

  const onEditTodo = () => {
    console.log(newText);
    todosRef.doc(id).set({ text: newText }, { merge: true });
  };

  const handleEdit = () => {
    setModal(!modal);
  };

  const onDeleteTodo = (id) => todosRef.doc(id).delete();

  return (
    <div>
      <p>{todo.todo.text}</p>
      <input
        type="checkbox"
        defaultChecked={checked}
        onChange={() => onCompleteTodo(id, complete)}
      />
      <button onClick={() => onDeleteTodo(id)}>delete</button>
      <button onClick={handleEdit}> Edit</button>
      <Modal
        displayModal={modal}
        closeModal={handleEdit}
        content={text}
        handleClick={onEditTodo}
        upDate={(textNew) => setNewText(textNew)}
        setDate={(startDate) => setTodoDate(startDate)}
        date={todoDate}
        buttonType={"Update"}
      />
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object,
};
export default TodoItem;
