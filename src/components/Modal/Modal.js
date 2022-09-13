import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ isShowing, children, toggleModal }) => {
  return isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal-overlay" />
          <div
            id="bg"
            onClick={toggleModal}
            className="modal-wrapper flex justify-center items-center p-4"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal shadow rounded-xl">{children}</div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;
};

export default Modal;
