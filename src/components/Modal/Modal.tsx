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
            className="modal-wrapper flex flex-col"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <button className="font-semibold shadow border bg-white rounded-full h-8 w-8 p-4 flex items-center justify-center mt-4 ml-auto mr-4">
              X
            </button>
            <div className="modal shadow rounded-xl mt-4">{children}</div>
          </div>
        </>,
        document.body
      )
    : null;
};

export default Modal;
