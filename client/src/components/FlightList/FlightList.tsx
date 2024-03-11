import { Row, Col } from "react-bootstrap"
import { useEffect, useState } from "react"
import { flightImg } from "../../appconstants"
import './FlightList.css'
import axios from "axios"
import { useNavigate } from "react-router-dom"

const FlightList = ({oneFlightData,twoFlightData }) => {
  
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
  const navigate = useNavigate()
console.log(oneFlightData)
console.log(twoFlightData)
  return (
    <>
      <br />
      <div style={{ height: "60rem" }}>
        
      {oneFlightData !== undefined ?<div>
           <h2>Non-Stop Flights</h2>
            <div className="flightListContainer">
              <Row className='row-cols-1 row-cols-lg-1 g-4'>
                {oneFlightData.map((flight, index) => (
                  <Col key={index}>
                    <div key={index} style={{ width: "50em", border: "solid", display: "flex", justifyContent: "space-between", borderRadius: "10px" }}>
                      <div style={{ paddingLeft: "80px" }}>
                        <img src={flightImg.flights[flight.flightName.toLowerCase()]} alt='Flight' style={{ height: '60px', width: '60px', paddingTop: "14px", borderRadius: "30px" }} />
                      </div>

                      <div style={{ paddingTop: "15px" }}>
                        <p>{flight.flightName}</p>
                        <p style={{ fontSize: "small" }}>{flight.flightCode}</p>
                      </div>
                      <div style={{ paddingTop: "15px" }}>
                        <p id="time">{millisecondsToTime(flight.srcTime.value)}</p>
                        <p style={{ fontSize: "small" }}>{flight.srcCode}</p>
                      </div>

                      <div style={{ paddingTop: "15px" }}>
                        <p>{millisecondsToTime(flight.destTime.value)}</p>
                        <p style={{ fontSize: "small", paddingBottom: "0.4px" }}>{flight.destCode}</p>
                      </div>

                      <div style={{ paddingTop: "30px" }}>
                        <p>{flight.price}</p>
                      </div>

                      <div style={{ justifyItems: "center", paddingTop: "22px", paddingRight: "20px" }} onClick={()=>{navigate('/details',{state:[flight]})}}>
                        <button style={{ border: "solid" }}>Book Now</button>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>

          </div>
          :null}


        
        {twoFlightData !== undefined ?
          <div>
            <h2>One-Stop Flights</h2>
            <div className="flightListContainer">
              <Row className='row-cols-1 row-cols-lg-1 g-4'>
                {twoFlightData!==undefined && twoFlightData.map((flight, index) => (
                  <Col key={index}>
                    <div key={index} style={{ width: "50em", border: "solid", display: "flex", justifyContent: "space-between", borderRadius: "10px" }}>
                      <div style={{ paddingLeft: "80px" }}>
                        <img src={flightImg.flights[flight.flightName.toLowerCase()]} alt='Flight' style={{ height: '60px', width: '60px', paddingTop: "14px", borderRadius: "30px" }} />
                      </div>

                      <div style={{ paddingTop: "15px" }}>
                        <p>{flight.flightName}</p>
                        <p style={{ fontSize: "small" }}>{flight.flightCode}</p>
                      </div>
                      <div style={{ paddingTop: "15px" }}>
                        <p id="time">{millisecondsToTime(flight.srcTime.value)}</p>
                        <p style={{ fontSize: "small" }}>{flight.srcCode}</p>
                      </div>

                      <div style={{ paddingTop: "15px" }}>
                        <p>{millisecondsToTime(flight.destTime.value)}</p>
                        <p style={{ fontSize: "small", paddingBottom: "0.4px" }}>{flight.destCode}</p>
                      </div>

                      <div style={{ paddingTop: "30px" }}>
                        <p>{flight.price}</p>
                      </div>

                      <div style={{ justifyItems: "center", paddingTop: "22px", paddingRight: "20px" }} onClick={()=>{navigate('/details',{state:[flight]})}}>
                        <button style={{ border: "solid" }}>Book Now</button>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        :null}
        {(oneFlightData===undefined &&
          twoFlightData===undefined) ?
          <h1>No Flights Available</h1>:null

        }
      </div>
    </>
  )
}

export default FlightList