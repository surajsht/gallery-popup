import { createContext, useEffect } from "react";
import { useState } from "react";
import Data from "./Data";

let GlobalContext = createContext(null);

const ImageContext = (prop) => {
  let [imgId, setGetImgId] = useState(null);
  let [showModal, setShowModal] = useState(false);

  let getImgId = (id) => {
    setGetImgId(id);
    setShowModal(true);
  };

  let closeModal = () => {
    setShowModal(false);
  };

  let prevModal = () => {
    setGetImgId(imgId === 0 ? Data.length - 1 : imgId - 1);
  };

  let nextModal = () => {
   setGetImgId(imgId === Data.length - 1 ? 0 : imgId + 1)
  };

  let contextValue = {
    getImgId,
    imgId,
    showModal,
    closeModal,
    nextModal,
    prevModal,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {prop.children}
    </GlobalContext.Provider>
  );
};

export default ImageContext;
export { GlobalContext };
