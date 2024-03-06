/* eslint-disable react/prop-types */


const BookingDetails = ({data}) => {
    
  return (
    <div className="booking-details">
    <div className="bookingDetailsContainer">
        <div className="flightDetails1">
            <h2 className="item">{data.sourceCode} -  {data.destCode}</h2>
            <h5 className="item" id="cancel">Cancellation Fees Apply</h5>
        </div>
        <div className="flightDetails2">
            <h5 className="item" style={{margin: '0'}}>Wednesday , Mar 6</h5>
            <p>Non-Stop - 2h 30min</p>

        </div>
        <div className="flightDetails2" style={{width:'25%'}}>
            <h4 className="item1">{data.flightName}</h4>
            <h4 className="item1">{data.flightCode}</h4>
        </div>

        <div className="flightDetails3">
            <div className="sourceDetails">
                <h4>Time</h4>
                <h4>Place</h4>
                <span>Terminalllllllllllllllllllllllllllllllllllllllllllllllllll</span>
            </div>
            <div className="destDetails">
            <h4>Time</h4>
                <h4>Place</h4>
                <span>Terminalllllllllllllllllllllllllllllllllllllllllllllllllll</span>
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
        <div className="flightDetails">
            <h2 className="item">{data.sourceCode} -  {data.destCode}</h2>
            <h5 className="item" id="cancel">Cancellation Fees Apply</h5>
            <h4 className="item" style={{margin: '0'}}>Wednesday , Mar 6</h4>
        </div>
        <div className="flightCode">

            <h4 className="item1">{data.flightName}</h4>
            <h4 className="item1">{data.flightCode}</h4>
        </div>
    </div>
    <div className="bookingDetailsContainer">
        <div className="flightDetails">
            <h2 className="item">{data.sourceCode} -  {data.destCode}</h2>
            <h5 className="item">Cancellation Fees Apply</h5>
            <h4 className="item" style={{margin: '0'}}>Wednesday , Mar 6</h4>
        </div>
        <div className="flightCode">

            <h4 className="item1">{data.flightName}</h4>
            <h4 className="item1">{data.flightCode}</h4>
        </div>
    </div>
   
    </div>
  )
}

export default BookingDetails