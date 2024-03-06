/* eslint-disable react/prop-types */

import { useData } from '../components/Context';
import { useEffect } from "react";

const TotalFare = ({ data , passangerData }) => {
  const dataa= useData();
  console.log(passangerData)
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
      <a className="button" href="#" onClick={()=>{}}>
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
