const Button = (props) => {
  const { name, onClick, type = "primary", disabled = false } = props;
  return (
    <>
      {type === "primary" ? (
        <button
          className=" bg-red-900 text-white px-3 py-3 m-2 rounded-sm hover:bg-amber-800 w-max"
          onClick={onClick}
          disabled={disabled}
        >
          {name}
        </button>
      ) : (
        <button
          className=" bg-white text-red-900 px-3 py-3 m-2 rounded-sm border border-solid border-red-900 hover:bg-orange-100 w-max"
          onClick={onClick}
          disabled={disabled}
        >
          {name}
        </button>
      )}
    </>
  );
};

export default Button;
