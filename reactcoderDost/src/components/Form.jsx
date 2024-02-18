import React, { useState } from "react";

const Form = ({ addvideo }) => {
  const [title, setTitle] = useState("");
  const [views, setViews] = useState("");
  const [time, setTime] = useState("");
  const [image, setImage] = useState("");
  const [verified, setVerified] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    addvideo({ title, views, time, image, verified });
    setTime("");
    setTitle("");
    setViews("");
    setImage("");
    setVerified("");
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "400px",
          margin: "auto",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      >
        <div style={{ marginBottom: "10px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            title:{" "}
          </label>
          <input
            type="text"
            name="title"
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "3px",
              border: "1px solid #ccc",
            }}
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            required
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            views:
          </label>
          <input
            type="text"
            name="views"
            value={views}
            onChange={(e) => {
              setViews(e.target.value);
            }}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "3px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            image:{" "}
          </label>
          <input
            type="text"
            name="image"
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "3px",
              border: "1px solid #ccc",
            }}
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
            required
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            verified:{" "}
          </label>
          <input
            type="text"
            name="image"
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "3px",
              border: "1px solid #ccc",
            }}
            value={verified}
            onChange={(e) => {
              setVerified(e.target.value);
            }}
            required
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>time:</label>
          <textarea
            name="message"
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "3px",
              border: "1px solid #ccc",
            }}
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
            rows="5"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: "#007bff",
            color: "#fff",
            padding: "10px 20px",
            border: "none",
            borderRadius: "3px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
