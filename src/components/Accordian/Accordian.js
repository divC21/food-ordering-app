const Accordian = ({ title, children, isOpen = false, getOpenedItem }) => {
  const toggleAccordion = () => {
    getOpenedItem(title, isOpen);
  };

  return (
    <div className="my-2">
      <button
        onClick={toggleAccordion}
        className="w-full flex justify-between bg-gray-100 items-center  border border-solid border-slate-100 p-5 m-t-1.5 font-bold text-2xl text-slate-800"
      >
        <span>{title}</span>
        <span className="text-slate-800 transition-transform duration-300">
          {isOpen ? "-" : "+"}
        </span>
      </button>
      {isOpen ? (
        <div className="transition-all duration-300 ease-in-out p-5 bg-slate-50">
          {children}
        </div>
      ) : null}
    </div>
  );
};

export default Accordian;
