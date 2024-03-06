/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";
import Heading from "./Heading";
const BookingDetails = ({ data ,sendData}) => {
    const [statee , setStatee] = useState('')
    useEffect(()=>{
        if(!sessionStorage.getItem('user')){
            console.log("not logged in")
        }
    })
  const [passengers, setPassengers] = useState([]);
  const handleAddPassenger = () => {
    setPassengers([...passengers, {name:'' , age:'' , email: ''}]);
    sendData([...passengers, { name: '', age: '', email: '' }]);
    data.price = 2*data.price;
    data['state'] = statee
  };

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newPassengers = [...passengers];
    newPassengers[index][name] = value;
    setPassengers(newPassengers);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendData(passengers)
    console.log(passengers);
  };
  return (
    <div className="booking-details">
      <div className="bookingDetailsContainer" style={{ height: "85vh" }}>
        <div className="flightDetails1">
          <Heading level={2} className="item" style={{ marginLeft: "-5.5rem" }}>
            {data.sourceCode} - {data.destCode}
          </Heading>
          <Heading level={5} className="item" id="cancel">
            Cancellation Fees Apply
          </Heading>
        </div>
        <div className="flightDetails2">
          <Heading level={5} className="item" id="Bookdate">
            Wednesday , Mar 6
          </Heading>
          <p>Non-Stop - 2h 30min</p>
        </div>
        <div
          className="flightDetails2"
          style={{ width: "25%", marginLeft: "1.2rem" }}
        >
          <Heading level={4} className="item1">{data.flightName}</Heading>
          <Heading level={4} className="item1">{data.flightCode}</Heading>
        </div>

        <div className="flightDetails3">
          <div className="sourceDetails">
            <Heading level={4}>{data.sourceTime}</Heading>
            <Heading level={4}>{data.sourceCode}</Heading>
          </div>
          <div className="destDetails">
            <Heading level={4}>{data.destTime}</Heading>
            <Heading level={4}>{data.destCode}</Heading>
          </div>
          <div className="line"></div>
          <div className="infos">
            <div id="info1">
              <Heading level={5}>Cabin Baggage:</Heading>
              <p>7 Kgs (1 piece only) / Adult</p>
            </div>
            <div id="info2">
              <Heading level={5}>Check-In Baggage:</Heading>
              <p>15 Kgs (1 piece only) / Adult</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bookingDetailsContainer">
        <div
          className="flightDetails"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Heading level={2} className="item">Cancellation Policy</Heading>
          <a className="item" style={{ cursor: "pointer", color: "blue" }}>
            View Policy
          </a>
        </div>
        <div className="flightCode" style={{ marginLeft: "1.5rem" }}>
          <Heading level={4} className="item1">
            {data.sourceCode} - {data.destCode}
          </Heading>
        </div>
        <div className="penaltyContainer">
          <div className="penalty" style={{ fontSize: "15px" }}>
            <Heading level={4}>Cancellation Penalty: </Heading>
            <Heading level={5}> ₹ {data.price / 2}</Heading>
            <Heading level={5}> ₹ {data.price}</Heading>
          </div>
        </div>
        <div className="line2"></div>
        <div className="cancelContainer">
          <div className="penalty" style={{ fontSize: "15px" }}>
            <Heading level={4}>Cancellation Between: </Heading>
            <Heading level={5}>
              {" "}
              {data.sourceTime.split(":")[0] - 2} :{" "}
              {data.sourceTime.split(":")[0]}
            </Heading>
            <Heading level={5}> {data.sourceTime}</Heading>
          </div>
        </div>
      </div>
      <div className="bookingDetailsContainer" style={{padding:'1.1rem 0rem'}}>
      <div className="headerr" style={{display:'flex' , justifyContent: 'space-between'}}>

        <Heading level={2} className="item">Passenger Details</Heading>
        <button type="button" id="addPassenger" onClick={() =>handleAddPassenger()}>
          Add Passenger
        </button>
      </div>
        {passengers.map((passenger, index) => (
          <div style={{display:'flex' , margin: '0 2rem'}} key={index}>
            <div className="form__group field">
              <input
                type="input"
                className="form__field"
                placeholder="Name"
                name="name"
                id="name"
                onChange={(e)=> handleChange(index ,e)}
                required
              />
              <label htmlFor="name" className="form__label">
                Name
              </label>
            </div>
              <div className="form__group field">
                <input
                  type="input"
                  className="form__field"
                  placeholder="Email"
                  name="email"
                  id="email"
                  required
                  onChange={(e)=> handleChange(index ,e)}
                />
                <label htmlFor="email" className="form__label">
                  Email
                </label>
              </div>
              <div className="form__group field">
                <input
                  type="number"
                  className="form__field"
                  placeholder="Age"
                  name="age"
                  id="age"
                  onChange={(e)=> handleChange(index ,e)}
                  required
                />
                <label htmlFor="age" className="form__label">
                  Age
                </label>
              </div>
          </div>
        ))}
      </div>
      <div className="bookingDetailsContainer">
        <Heading level={2} className="item" style={{ margin: "0 2rem", padding: "1rem 0rem" }}>
          Your State{" "}
          <span style={{ fontSize: "10px", fontWeight: "normal" }}>
            (Required for GST purpose on your tax invoice. You can edit this
            anytime later in your profile section. )
          </span>
        </Heading>
        <div className="stateDetails" style={{ margin: "2rem" }}>
          <div className="stateDetailsItem1" style={{ marginBottom: "2rem" }}>
            <p>Select Your State</p>
            <div className="form__group field">
              <input
                type="input"
                className="form__field"
                placeholder="State"
                name="state"
                id="state"
                required
                onClick={(e) => {setStatee(e.target.value)}}
              />
              <label htmlFor="state" className="form__label">
                State
              </label>
            </div>
          </div>
          <div
            className="stateDetailsItem1"
            style={{
              display: "flex",
              width: "60%",
              justifyContent: "space-between",
            }}
          >
            <input type="checkbox" name="" id="" />
            <p>Confirm and save billing details to your profile</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingDetails;
