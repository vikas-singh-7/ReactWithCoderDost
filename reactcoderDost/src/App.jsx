import React from "react";
import "./App.css";

const App = () => {
  const name = "vikas";
  console.log("hello world");

  return (
    <div className="main">
      <h1>hello {name}</h1>
      <Child />
    </div>
  );
};

function Child() {
  const style = {
    height: "40vh",
    weidth: "100%",
    backgroundColor: "gray",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "2rem",
  };
  return (
    <main>
      <div style={style}>
        <h1>hello its me lyingNoob</h1>
        <p>i am leanring react and i willl be a good programmer in future </p>
      </div>
    </main>
  );
}

export default App;
