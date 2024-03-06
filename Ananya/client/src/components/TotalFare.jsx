/* eslint-disable react/prop-types */

const TotalFare = ({ data }) => {
  return (
    <div className="totalFareContainer">
      <h2>Fair Summary</h2>
      <div className="charges">
        <h3>Base Fare</h3>
        <span>
          <p>Adult (1 x {data.price})</p>
          <p>₹{data.price}</p>
        </span>
        <h3>Taxes and Surcharges</h3>
        <span>
          <p>Airline Taxes and Surcharges</p>
          <p>₹ 828</p>
        </span>
      </div>
      <div className="bookbtn">
      <a className="button" href="#">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Book Now
      </a>
      </div>
    </div>
  );
};

export default TotalFare;
