import "./input.css";

const Input = (props) => {
  const { type, placeholder, value, onChange } = props;
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="input"
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
