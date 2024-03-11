/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "./Context";
const TotalFare = ({ data , passangerData }) => {
  const dataaa = useData();

  console.log(dataaa)
  const navigate = useNavigate()
  const[total , setTotal] = useState(0)
  const finalPay = () =>{
    navigate('/final' , {state : [passangerData,data]})
  }
  useEffect(()=>{
  },[data , passangerData])
  return (
    <div className="totalFareContainer">
      <h2>Fair Summary</h2>
      <div className="charges">
        <h3>Base Fare</h3>
        { passangerData.length > 0 && dataaa!==null &&
        <span>
          <p>Adult ({dataaa.data.length} x {data[0].price})</p>
          <p>₹{data[0].price* dataaa.data.length}</p>
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
