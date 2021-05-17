import React, { useState } from "react";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Modal = (props) => {
  const [textNew, setTextNew] = useState(props.content);
  const [startDate, setStartDate] = useState(props.date);
  const divStyle = {
    display: props.displayModal ? "block" : "none",
  };

  const handleChange = (e) => {
    e.preventDefault();
    let value = e.target.value;
    setTextNew(value);
    props.upDate(value);
  };

  const handleDate = (date) => {
    setStartDate(date);
    props.setDate(date);
    console.log("date: ", date);
  };

  function closeModal(e) {
    e.stopPropagation();
    props.closeModal();
  }
  return (
    <div className="modal" onClick={closeModal} style={divStyle}>
      {" "}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {" "}
        <textarea
          placeholder="write your todo"
          rows="6"
          required
          value={textNew}
          onChange={handleChange}
        ></textarea>
        <span className="close" onClick={closeModal}>
          &times;
        </span>{" "}
        <DatePicker selected={startDate} onChange={handleDate} />
        <button onClick={props.handleClick}> {props.buttonType}</button>
      </div>{" "}
    </div>
  );
};

Modal.propTypes = {
  displayModal: PropTypes.bool,
  closeModal: PropTypes.bool,
  handleClick: PropTypes.func,
  content: PropTypes.string,
  buttonType: PropTypes.string,
  upDate: PropTypes.func,
  setDate: PropTypes.func,
  date: PropTypes.func,
};
export default Modal;
