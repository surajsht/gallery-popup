import { useContext } from "react";
import Data from "./Data";
import { GlobalContext } from "./ImageContext";
import Modal from "./Modal";
import "./main.css";

const App = () => {
  let { getImgId } = useContext(GlobalContext);

  return (
    <div className="image-container">
      {Data.map((img, idx) => {
        return (
          <div className="image-item" key={idx}>
            <img src={img.img} alt="image" onClick={() => getImgId(idx)} />
          </div>
        );
      })}
      <Modal />
    </div>
  );
};

export default App;
