import React from "react";
import Thumb from "./components/Thumb";
import "./App.css";

const App = () => {
  const obj = {
    title: "javaScript",
    time: "9 months ago",
    image:
      "https://www.slashgear.com/img/gallery/the-15-coolest-concept-cars-of-all-time/intro-1660139822.webp",
    views: "1m",
  };
  const images = {
    image1: "node.jpg",
  };
  const channel = "lyingNoob";
  return (
    <div className="app">
      <Thumb
        channel={channel}
        views={"100k"}
        title="React with Noob"
        time="1 years ago"
        image={images.image1}
      />
      <Thumb
        channel={channel}
        views={"89k"}
        title="Node with Noob"
        time=" 3 months ago"
        image="videoOne.webp"
      />
      <Thumb {...obj} />
    </div>
  );
};

export default App;
