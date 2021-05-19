import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Modal = (props) => {
  const [textNew, setTextNew] = useState(props.content);
  const [startDate, setStartDate] = useState(new Date());
  const divStyle = {
    display: props.displayModal ? "block" : "none",
  };

  //   useEffect(() => {
  //     const newDate = props.date.date.toDate();
  //     setStartDate(newDate);
  //     console.log("date type", startDate);
  //   }, []);

  const handleChange = (e) => {
    e.preventDefault();
    let value = e.target.value;
    setTextNew(value);
    props.upDate(value);
  };

  const handleDate = (date, e) => {
    e.preventDefault();
    setStartDate(date);
    props.setDate(date);
    console.log("date: ", date);
    console.log("date1: ", startDate);
  };

  const convertDate = () => {
    console.log("date type", props.date.date);
    return props.date.date.toDate();
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
        <button className="save" onClick={props.handleClick}>
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
  content: PropTypes.string,
  buttonType: PropTypes.string,
  upDate: PropTypes.func,
  setDate: PropTypes.func,
  date: PropTypes.object,
  error: PropTypes.string,
};
export default Modal;
