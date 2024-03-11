/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";
import { useData } from './Context';
import Heading from "./Heading";
const BookingDetails = ({ data ,sendData}) => {
  const { updateData } = useData();
  console.log(data);

  console.log(sendData);
    const [statee , setStatee] = useState('')
    useEffect(()=>{
        if(!sessionStorage.getItem('user')){
            console.log("not logged in")
        }
    })
  const [passengers, setPassengers] = useState([{name:sessionStorage.getItem('username') , age: 21 , email:"rishi19@gmail.com"}]);
  const handleAddPassenger = () => {

    setPassengers([...passengers, {name:'' , age:'' , email: ''}]);
    sendData([...passengers, { name: '', age: '', email: '' }]);
    data.price = 2*data.price;
    data['state'] = statee
    updateData(passengers);
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

  const millisecondsToTime=(duration)=> {
    const milliseconds = parseInt((duration % 1000) / 100);
    let seconds = Math.floor((duration / 1000) % 60);
    let minutes = Math.floor((duration / (1000 * 60)) % 60);
    let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
  
    return hours + ":" + minutes ;
  }

  return (
    <div className="booking-details">
      <div className="bookingDetailsContainer" style={{ height: "85vh" }}>
        <div className="flightDetails1">
          <h2 className="item" style={{ marginLeft: "-5.5rem" }}>
            {data[0].srcCode} - {data[0].destCode}
          </h2>
          <h5 className="item" id="cancel">
            Cancellation Fees Apply
          </h5>
        </div>
        <div className="flightDetails2">
          <h5 className="item" id="Bookdate">
           {new Date().toDateString()}
          </h5>
          <p>Non-Stop - 2h 30min</p>
        </div>
        <div
          className="flightDetails2"
          style={{ width: "25%", marginLeft: "1.2rem" }}
        >
          <h4 className="item1">{data[0].flightName}</h4>
          <h4 className="item1">{data[0].flightCode}</h4>
        </div>

        <div className="flightDetails3">
          <div className="sourceDetails">
            <h4>{millisecondsToTime(data[0].srcTime.value)}</h4>
            <h4>{data[0].srcCode}</h4>
          </div>
          <div className="destDetails">
            <h4>{millisecondsToTime(data[0].destTime.value)}</h4>
            <h4>{data[0].destCode}</h4>
          </div>
          <div className="line"></div>
          <div className="infos">
            <div id="info1">
              <h5>Cabin Baggage:</h5>
              <p>7 Kgs (1 piece only) / Adult</p>
            </div>
            <div id="info2">
              <h5>Check-In Baggage:</h5>
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
          <h2 className="item">Cancellation Policy</h2>
          <a className="item" style={{ cursor: "pointer", color: "blue" }}>
            View Policy
          </a>
        </div>
        <div className="flightCode" style={{ marginLeft: "1.5rem" }}>
          <h4 className="item1">
            {data[0].srcCode} - {data[0].destCode}
          </h4>
        </div>
        <div className="penaltyContainer">
          <div className="penalty" style={{ fontSize: "15px" }}>
            <h4>Cancellation Penalty: </h4>
            <h5> ₹ {data[0].price / 2}</h5>
            <h5> ₹ {data[0].price}</h5>
          </div>
        </div>
        <div className="line2"></div>
        <div className="cancelContainer">
          <div className="penalty" style={{ fontSize: "15px" }}>
            <h4>Cancellation Between: </h4>
            <h5>
              {" "}
              {millisecondsToTime(data[0].srcTime.value - 7200000)}
            </h5>
            <h5> {millisecondsToTime(data[0].srcTime.value)}</h5>
          </div>
        </div>
      </div>
      <div className="bookingDetailsContainer" style={{padding:'1.1rem 0rem'}}>
      <div className="headerr" style={{display:'flex' , justifyContent: 'space-between'}}>

        <h2 className="item">Passenger Details</h2>
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
                value={passenger.name}
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
                  value={passenger.email}
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
                  value={passenger.age}
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
        <h2 className="item" style={{ margin: "0 2rem", padding: "1rem 0rem" }}>
          Your State{" "}
          <span style={{ fontSize: "10px", fontWeight: "normal" }}>
            (Required for GST purpose on your tax invoice. You can edit this
            anytime later in your profile section. )
          </span>
        </h2>
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
