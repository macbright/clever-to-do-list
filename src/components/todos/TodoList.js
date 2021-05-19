import React, { useContext, useEffect, useState } from "react";
import firebase, { firestore, functions, app } from "../../base";
import { AuthContext } from "../Auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import TodoShow from "./TodoShow";
import { checkDate } from "../utils/checkDate";
import PropTypes from "prop-types";

const TodoList = ({ selectedDate }) => {
  const todosRef = firestore.collection(`users/${app.currentUser.uid}/todos`);
  const [todos] = useCollectionData(todosRef, { idField: "id" });
  const [list, setList] = useState(null);
  let selectedList = null;

  useEffect(() => {
    setList(todos);
  }, [todos]);

  const listItems = list?.map((todo) => {
    selectedList = checkDate(selectedDate, list);
  });

  const SelectedListTodos = selectedList?.map((todo) => {
    return (
      <div key={todo.id} className="">
        {" "}
        <TodoShow todo={todo} />{" "}
      </div>
    );
  });

  return (
    <div className="todolistpage">
      <h4>{(selectedList && selectedList.length) || 0} Tasks Today</h4>
      <div className="infinite-scroll">{list && SelectedListTodos}</div>
    </div>
  );
};

TodoList.propTypes = {
  selectedDate: PropTypes.object,
};
export default TodoList;
