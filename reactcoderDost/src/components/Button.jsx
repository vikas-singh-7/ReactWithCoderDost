import "./Button.css";
const Button = ({ children, message, onClick }) => {
  // const handleClick=()=>{
  //     onClick(message)
  // }
  return (
    <div>
      <button
        className="button"
        onClick={() => {
          onClick(message);
        }}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
