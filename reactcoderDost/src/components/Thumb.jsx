import "./Thumb.css";

const Thumb = ({ image, title, views, channel="lyingNoob", time }) => {
  return (
    <>
      <div className="container">
        <div className="pic">
          <img src={image} alt="" height="200" />
        </div>
        <div className="title">{title}</div>
        <div className="channel">{channel}</div>
        <div className="views">
          {views} views<span>.</span>
          {time}
        </div>
      </div>
    </>
  );
};

export default Thumb;
