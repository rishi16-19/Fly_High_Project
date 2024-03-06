/* eslint-disable react/prop-types */

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TotalFare = ({ data , passangerData }) => {
  const navigate = useNavigate()
  const finalPay = () =>{
    navigate('/final' , {state : passangerData})
  }
  useEffect(()=>{

  },[data , passangerData])
  return (
    <div className="totalFareContainer">
      <h2>Fair Summary</h2>
      <div className="charges">
        <h3>Base Fare</h3>
        { passangerData.length > 0 &&
        <span>
          <p>Adult ({passangerData.length} x {data.price})</p>
          <p>₹{data.price}</p>
        </span>
        }
        <h3>Taxes and Surcharges</h3>
        <span>
          <p>Airline Taxes and Surcharges</p>
          <p>₹ 828</p>
        </span>
      </div>
      <div className="bookbtn">
      <button className="button" onClick={()=>{finalPay()}}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Book Now
      </button>
      </div>
    </div>
  );
};

export default TotalFare;
