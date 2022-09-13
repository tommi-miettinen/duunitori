import ReactDOM from "react-dom";

interface ModalProps {
  isShowing: boolean;
  children: any;
  toggleModal: () => void;
}

const Modal = ({ isShowing, children, toggleModal }: ModalProps) => {
  return isShowing
    ? ReactDOM.createPortal(
        <>
          <div className="modal-overlay" />
          <div
            id="bg"
            onClick={toggleModal}
            className="modal-wrapper flex"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal shadow rounded-xl mt-8">{children}</div>
          </div>
        </>,
        document.body
      )
    : null;
};

export default Modal;
