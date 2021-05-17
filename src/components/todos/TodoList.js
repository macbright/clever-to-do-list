import React, { useContext, useEffect, useState } from "react";
import firebase, { firestore, functions, app } from "../../base";
import { AuthContext } from "../Auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todosRef = firestore.collection(`users/${app.currentUser.uid}/todos`);
  const [todos] = useCollectionData(todosRef, { idField: "id" });
  const [list, setList] = useState(null);

  useEffect(() => {
    setList(todos);
  }, [todos]);

  const listItems = list?.map((todo) => {
    //console.log(todo);
    return (
      <div key={todo.id}>
        {" "}
        <TodoItem todo={todo} />{" "}
      </div>
    );
  });

  return (
    <div>
      {console.log(todos)}
      {/* {console.log(todos[0].createdAt.toDate())} */}
      {list && listItems}
    </div>
  );
};

export default TodoList;
