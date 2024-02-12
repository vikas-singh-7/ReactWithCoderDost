import React, { useState } from "react";
import Thumb from "./components/Thumb";
import "./App.css";
import details from "./data/data";
import Button from "./components/Button";

const App = () => {
  const [message, setmessage] = useState("play");
  const onhandlePlay = (message) => {
    message === "play"
      ? (console.log(message), setmessage("pause"))
      : (console.log(message), setmessage("play"));
  };
  // const onhandlePause = (message) => {
  //   console.log(message);
  // };
  return (
    <div className="app">
      {details.map((item) => {
        return <Thumb key={item.id} {...item} />;
      })}
      <div style={{ clear: "both", display: "flex", gap: "2px" }}>
        <Button message={message} onClick={onhandlePlay}>
          {message}
        </Button>
        {/* <Button message={"pause button"} onClick={onhandlePause}>
          pause
        </Button> */}
      </div>
    </div>
  );
};

export default App;
