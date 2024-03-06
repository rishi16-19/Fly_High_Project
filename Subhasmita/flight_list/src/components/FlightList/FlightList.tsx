import { Row, Col } from "react-bootstrap"

const FlightList=()=>{
    
    const dummyData = [
      { flightCode: "ABC", sourceCode: "BBSR", destCode: "CCU", flightName: "AirAsia", flightDate: 1, sourceTime: "20:20", destTime: "21:30", price: 76372 },
      { flightCode: "BCD", sourceCode: "CCU", destCode: "DEL", flightName: "Indigo", flightDate: 3, sourceTime: "17:35", destTime: "15:00", price: 650 },
      { flightCode: "CDE", sourceCode: "DEL", destCode: "BBSR", flightName: "SpiceJet", flightDate: 2, sourceTime: "16:25", destTime: "20:30", price: 5 },
      { flightCode: "DEF", sourceCode: "BBI", destCode: "MUM", flightName: "Air India", flightDate: 2, sourceTime: "10:40", destTime: "21:10", price: 5000 },
      { flightCode: "EFG", sourceCode: "MUM", destCode: "BBI", flightName: "AirAsia", flightDate: 3, sourceTime: "00:00", destTime: "4:50", price: 500 },
      { flightCode: "BCD", sourceCode: "CCU", destCode: "DEL", flightName: "Indigo", flightDate: 3, sourceTime: "17:35", destTime: "15:00", price: 650 },
    ]
  
    const flightImg = {
      flights:{
      "AirAsia": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/AirAsia_New_Logo.svg/450px-AirAsia_New_Logo.svg.png",
      "Indigo": "https://logos-world.net/wp-content/uploads/2023/01/IndiGo-Logo-500x281.png",
      "SpiceJet": "https://companieslogo.com/img/orig/SPICEJET.BO_BIG-5544d4f0.png?t=1604053079",
      "Air India": "https://presentations.gov.in/wp-content/uploads/2020/06/Preview-2.png?x93559",
      "Air India Express": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Air_India_Express_Logo.svg/150px-Air_India_Express_Logo.svg.png",
      "Akasa Air": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Akasa_Air_logo.svg/1074px-Akasa_Air_logo.svg.png",
      "Alliance Air": "https://www.ch-aviation.com/images/stockPhotos/1326/4c322bf06fa56dfb8d8aaf3931067360077a4a51.jpg",
      "Vistara": "https://seeklogo.com/images/V/vistara-logo-C07710BC2B-seeklogo.com.png"

    }
    }

    return(
        <>
        
        <div className="container">
        <Row className='row-cols-1 row-cols-lg-1 g-4'>
          {dummyData.map((flight, index) => (
            <Col key={index}>
              <div key={index} style={{ width: "50em", border: "solid", display:"flex", justifyContent:"space-between"}}>
              <div style={{paddingLeft:"80px"}}>
                  <img src={flightImg.flights[flight.flightName]} alt='Flight'style={{height:'75px', width:'75px', paddingTop:"14px"}}/>
                </div>
                
                <div style={{paddingTop:"15px"}}>
                  <p>{flight.flightName}</p>
                  <p style={{fontSize:"small"}}>{flight.flightCode}</p>
                </div>
                <div style={{paddingTop:"15px"}}>
                  <p>{flight.sourceTime}</p>
                  <p style={{fontSize:"small"}}>{flight.sourceCode}</p>
                </div>

                <div style={{paddingTop:"15px"}}>
                  <p>{flight.destTime}</p>
                  <p style={{fontSize:"small", paddingBottom:"0.4px"}}>{flight.destCode}</p>
                </div>

                <div style={{paddingTop:"30px"}}>
                  <p>{flight.price}</p>
                </div>

                <div style={{justifyItems:"center", paddingTop:"22px", paddingRight:"20px"}}>
                  <button style={{border:"solid"}}>Book Now</button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
        
        </>
    )
}

export default FlightList