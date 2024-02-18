import React, { useState } from "react";
import Thumb from "./components/Thumb";
import "./App.css";
import details from "./data/data";
import Button from "./components/Button";
import Form from "./components/Form";

const App = () => {
  const [video, setvideo] = useState(details);
  function addvideo({ title, views, time, image, verified }) {
    setvideo([
      ...video,
      {
        id: title,
        title,
        time,
        verified,
        image,
        views,
      },
    ]);
  }
  const handleClose = (id) => {
    setvideo(video.filter((item) => item.id != id));
  };
  const handleEdit = (id) => {
    console.log("hello i am edit video", id);
    console.log(video.find((item) => item.id == id));
  };
  return (
    <>
      <Form addvideo={addvideo} />
      <div className="app">
        {video.map((item) => {
          return (
            <Thumb
              key={item.id}
              {...item}
              handleClose={handleClose}
              handleEdit={handleEdit}
            >
              <Button key={item.title}>{item.title}</Button>
            </Thumb>
          );
        })}
      </div>
    </>
  );
};

export default App;
