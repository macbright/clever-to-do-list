import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Modal = (props) => {
  const [todo, setTodo] = useState(props.todo);
  const [startDate, setStartDate] = useState();
  //   const [todoDate, setTodoDate] = useState(props.todo.date.toDate());
  const divStyle = {
    display: props.displayModal ? "block" : "none",
  };

  useEffect(() => {}, []);

  const handleChange = (e) => {
    e.preventDefault();
    let value = e.target.value;
    setTodo({ ...todo, text: value });
  };

  const handleDate = (date, e) => {
    e.preventDefault();
    setTodo({ ...todo, date: date });
    console.log("todosss", date);
    setStartDate(date);
  };

  const handleUpdate = () => {
    props.upDatedTodo(todo);
  };

  function closeModal(e) {
    e.stopPropagation();
    props.closeModal();
  }

  return (
    <div className="modal" onClick={closeModal} style={divStyle}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {" "}
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <span className="error">{props.error}</span>
        <br />
        <textarea
          placeholder="write your todo"
          rows="6"
          required
          value={todo.text}
          onChange={handleChange}
        ></textarea>{" "}
        <DatePicker selected={startDate} onChange={handleDate} />
        <button className="save" onClick={handleUpdate}>
          {" "}
          {props.buttonType}
        </button>
      </div>{" "}
    </div>
  );
};

Modal.propTypes = {
  displayModal: PropTypes.bool,
  closeModal: PropTypes.func,
  handleClick: PropTypes.func,
  todo: PropTypes.object,
  buttonType: PropTypes.string,
  upDatedTodo: PropTypes.func,
  error: PropTypes.string,
};
export default Modal;
