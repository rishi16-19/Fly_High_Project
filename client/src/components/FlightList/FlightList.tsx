import { Row, Col } from "react-bootstrap"
import { useEffect, useState } from "react"
import { flightImg } from "../../appconstants"
import './FlightList.css'
import axios from "axios"

const FlightList = ({ props }) => {
  const [oneFlightData, setOneFlightData] = useState([])
  const [twoFlightData, setTwoFlightData] = useState([])
  useEffect(() => {
    getFlight();
  }, [])
  const getFlight = (async () => {
    const response = await axios.get(`http://localhost:8080/flight/${props.src}/${props.dest}/${props.dt}`);
    const data = await response.data;
    console.log(data)
    setTwoFlightData(data[0]);
    setOneFlightData(data[1]);
  })
  return (
    <>
      <br />
      <div style={{ height: "60rem" }}>
        <div>
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
                      <p id="time">{flight.srcTime.value}</p>
                      <p style={{ fontSize: "small" }}>{flight.srcCode}</p>
                    </div>

                    <div style={{ paddingTop: "15px" }}>
                      <p>{flight.destTime.value}</p>
                      <p style={{ fontSize: "small", paddingBottom: "0.4px" }}>{flight.destCode}</p>
                    </div>

                    <div style={{ paddingTop: "30px" }}>
                      <p>{flight.price}</p>
                    </div>

                    <div style={{ justifyItems: "center", paddingTop: "22px", paddingRight: "20px" }}>
                      <button style={{ border: "solid" }}>Book Now</button>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
        <div>
          <h2>One-Stop Flights</h2>
          <div className="flightListContainer">
            <Row className='row-cols-1 row-cols-lg-1 g-4'>
              {twoFlightData.map((flight, index) => (
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
                      <p id="time">{flight.srcTime.value}</p>
                      <p style={{ fontSize: "small" }}>{flight.srcCode}</p>
                    </div>

                    <div style={{ paddingTop: "15px" }}>
                      <p>{flight.destTime.value}</p>
                      <p style={{ fontSize: "small", paddingBottom: "0.4px" }}>{flight.destCode}</p>
                    </div>

                    <div style={{ paddingTop: "30px" }}>
                      <p>{flight.price}</p>
                    </div>

                    <div style={{ justifyItems: "center", paddingTop: "22px", paddingRight: "20px" }}>
                      <button style={{ border: "solid" }}>Book Now</button>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
    </>
  )
}

export default FlightList