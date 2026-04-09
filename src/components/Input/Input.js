const Input = (props) => {
  const { type, placeholder, value, onChange, testId = "" } = props;
  return (
    <input
      type={type}
      placeholder={placeholder}
      data-testid={testId}
      className="w-96 h-12 border-2 border-solid border-gray-200 p-5 rounded-sm focus:border-amber-800 focus:outline-none"
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
