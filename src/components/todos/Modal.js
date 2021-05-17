import React, { useState } from "react";
import PropTypes from "prop-types";

const Modal = (props) => {
  const [textNew, setTextNew] = useState(props.content);
  const divStyle = {
    display: props.displayModal ? "block" : "none",
  };

  const handleChange = (e) => {
    e.preventDefault();
    let value = e.target.value;
    setTextNew(value);
    props.upDate(value);
  };

  const handleCick = () => {};
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
};
export default Modal;
