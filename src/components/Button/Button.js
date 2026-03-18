import "./button.css";
const Button = (props) => {
  const { name, onClick, type = "primary", disabled = false } = props;
  return (
    <>
      {type === "primary" ? (
        <button className="primary-btn" onClick={onClick} disabled={disabled}>
          {name}
        </button>
      ) : (
        <button className="secondary-btn" onClick={onClick} disabled={disabled}>
          {name}
        </button>
      )}
    </>
  );
};

export default Button;
