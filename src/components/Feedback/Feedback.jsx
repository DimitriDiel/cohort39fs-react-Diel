import { useState } from "react";
import Button from "../Button/Button";

import "./styles.css";

function Feedback() {
  const [countLike, setLike] = useState(0);
  const [countDisLike, setDisLike] = useState(0);

  const plusLike = () => {
    setLike((prevValueLike) => {
      return prevValueLike + 1;
    });
  };
  const plusDisLike = () => {
    setDisLike((prevValueDis) => {
      return prevValueDis + 1;
    });
  };

  const resetResults = () => {
    setLike((prevValueLike) => {
      return (prevValueLike = 0);
    });
    setDisLike((prevValueDis) => {
      return (prevValueDis = 0);
    });
  };

  return (
    <div className="feedback-wrapper">
      <div className="button-control">
        <Button name="Like" onClick={plusLike} />
        <p className="count">{countLike}</p>
      </div>
      <div className="button-control">
        <Button name="Dislike" onClick={plusDisLike} />
        <p className="count">{countDisLike}</p>
      </div>
      <div className="button-control">
        <Button name="Reset Results" onClick={resetResults} />
      </div>
    </div>
  );
}

export default Feedback;
