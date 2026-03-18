import "./shimmer.css";

const Shimmer = ({ noOfCards = 10 }) => {
  return (
    <>
      {Array(noOfCards)
        .fill("")
        .map((e, index) => (
          <div className="shimmer-card" key={index}>
            <div className="shimmer-image"></div>
            <div className="shimmer-name"></div>
            <div className="shimmer-name"></div>
            <div className="shimmer-name"></div>
            <div className="shimmer-name"></div>
            <div className="shimmer-name"></div>
          </div>
        ))}
    </>
  );
};

export default Shimmer;
