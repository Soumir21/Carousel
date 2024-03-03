import { useState } from "react";
import "./App.css";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
export default function App() {
  const [index, setIndex] = useState(1);
  const [souce, setSource] = useState("./img1.jpg");
  const handleButton = (name) => {
    if (name === "right") {
      setIndex(index + 1);
    }
    console.log(index);
    setSource(`./img${index}.jpg`);
    console.log(souce);
  };
  return (
    <>
      <div className="container">
        <button
          claasName="btn"
          type="submit"
          value="submit"
          onClick={() => handleButton("left")}
        >
          <FaArrowAltCircleLeft />
        </button>
        <button
          claasName="btn"
          type="submit"
          value="sumit"
          onClick={() => handleButton("right")}
        >
          <FaArrowAltCircleRight />
        </button>
        {/* <ul className="image-list">
          <li>
            <img src="./img1.jpg" alt="img1" />
          </li>
          <li>
            <img src="./img2.jpg" alt="img1" />
          </li>
          <li>
            <img src="./img3.jpg" alt="img1" />
          </li>
        </ul> */}
        <img src={souce} />
      </div>
    </>
  );
}
