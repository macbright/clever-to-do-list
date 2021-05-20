import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddTodoModal = (props) => {
  const [todo, setTodo] = useState({});
  const [startDate, setStartDate] = useState();
  const divStyle = {
    display: props.displayModal ? "block" : "none",
  };

  useEffect(() => {
    console.log("date type", startDate);
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    let value = e.target.value;
    setTodo({ ...todo, text: value });
  };

  const handleDate = (date, e) => {
    e.preventDefault();
    setStartDate(date);
    setTodo({ ...todo, date: date });
  };

  const upDateToddo = () => {
    props.handleClick(todo);
  };

  function closeModal(e) {
    e.stopPropagation();
    props.closeModal();
  }
  return (
    <div className="modal" onClick={closeModal} style={divStyle}>
      {console.log("checked: from modal ", startDate)}{" "}
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
          value={props.content}
          onChange={handleChange}
        ></textarea>{" "}
        <DatePicker selected={startDate} onChange={handleDate} />
        <button className="save" onClick={upDateToddo}>
          {" "}
          {props.buttonType}
        </button>
      </div>{" "}
    </div>
  );
};

AddTodoModal.propTypes = {
  displayModal: PropTypes.bool,
  closeModal: PropTypes.func,
  handleClick: PropTypes.func,
  content: PropTypes.string,
  buttonType: PropTypes.string,
  upDate: PropTypes.func,
  setDate: PropTypes.func,
  date: PropTypes.object,
  error: PropTypes.string,
};
export default AddTodoModal;
