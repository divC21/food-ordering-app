import { useState } from "react";
const Accordian = ({ title, children }) => {
  const [toggle, setToggle] = useState(true);

  const toggleAccordion = () => {
    setToggle(!toggle);
  };

  return (
    <div className="my-2">
      <button
        onClick={toggleAccordion}
        className="w-full flex justify-between bg-gray-100 items-center p-5 m-t-1.5 font-bold text-2xl text-slate-800"
      >
        <span>{title}</span>
        <span className="text-slate-800 transition-transform duration-300">
          {toggle ? "-" : "+"}
        </span>
      </button>
      {toggle ? (
        <div className="transition-all duration-300 ease-in-out p-5 border border-slate-100">
          {children}
        </div>
      ) : null}
    </div>
  );
};

export default Accordian;
