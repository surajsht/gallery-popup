import { useContext } from "react";
import Data from "./Data";
import { GlobalContext } from "./ImageContext";
import { createPortal } from "react-dom";

const Modal = () => {
  let { imgId, showModal, closeModal, prevModal, nextModal } =
    useContext(GlobalContext);

  let findImage = Data.find((item, index) => index === imgId);

  if (!showModal) return;

  return createPortal(
    <div className="modal-content-container">
      <div className="overlay"></div>
      <div className="modal-content">
        <button className="close-modal" onClick={closeModal}>
          close
        </button>
        <img src={findImage.img} alt="modal-img" />
        <button className="prev" onClick={prevModal}>
          {" "}
          prev{" "}
        </button>
        <button className="next" onClick={nextModal}>
          {" "}
          next{" "}
        </button>
      </div>
    </div>,
    document.querySelector(".modal")
  );
};

export default Modal;
