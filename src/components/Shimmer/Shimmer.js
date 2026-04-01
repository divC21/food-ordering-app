const Shimmer = ({ noOfCards = 10 }) => {
  return (
    <>
      {Array(noOfCards)
        .fill("")
        .map((e, index) => (
          <div className="w-80 p-2.5" key={index}>
            <div className="h-60 mb-2.5 bg-gray-100 rounded-xl"></div>
            <div className="mb-2.5 bg-gray-100 h-5"></div>
            <div className="mb-2.5 bg-gray-100 h-5"></div>
            <div className="mb-2.5 bg-gray-100 h-5"></div>
            <div className="mb-2.5 bg-gray-100 h-5"></div>
            <div className="mb-2.5 bg-gray-100 h-5"></div>
          </div>
        ))}
    </>
  );
};

export default Shimmer;
