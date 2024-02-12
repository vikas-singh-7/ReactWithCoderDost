import { useState } from "react";
import "./Button.css";
const Button = ({ children, onPlay, onPause }) => {
  const [state, setstate] = useState(false);
  const handleClick = () => {
    state ? onPause() : onPlay();
    setstate(!state);
  };
  return (
    <div>
      <button className="button" onClick={handleClick}>
        {children} : {state ? "⏸️" : "⏯️"}
      </button>
    </div>
  );
};

export default Button;
