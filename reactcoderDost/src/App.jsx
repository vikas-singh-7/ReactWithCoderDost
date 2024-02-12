import React, { useState } from "react";
import Thumb from "./components/Thumb";
import "./App.css";
import details from "./data/data";
import Button from "./components/Button";

const App = () => {
  return (
    <div className="app">
      {details.map((item) => {
        return (
          <Thumb key={item.id} {...item}>
            {" "}
            <div>
              <Button
                onPlay={() => {
                  console.log("playing..", item.title);
                }}
                onPause={() => console.log("paused..", item.title)}
              >
                {item.title}
              </Button>
            </div>
          </Thumb>
        );
      })}
    </div>
  );
};

export default App;
