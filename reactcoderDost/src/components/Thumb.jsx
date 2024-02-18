import "./Thumb.css";

const Thumb = ({
  handleClose,
  handleEdit,
  image,
  title,
  views,
  id,
  channel = "lyingNoob",
  time,
  verified,
  children,
}) => {
  return (
    <>
      <div className="container" style={{ position: "relative" }}>
        <div className="pic">
          <button
            className="close"
            onClick={() => {
              handleEdit(id);
            }}
            style={{ position: "absolute", right: 0 }}
          >
            Edit
          </button>
          <button
            className="close"
            onClick={() => {
              handleClose(id);
            }}
            style={{ position: "absolute" }}
          >
            X close
          </button>
          <img src={image} alt="" height="200" />
        </div>
        <div className="title">{title}</div>
        <div className="channel">
          {channel}
          {verified && "✔️"}
        </div>
        <div className="views">
          {views} views<span>.</span>
          {time}
        </div>
        {children}
      </div>
    </>
  );
};

export default Thumb;
