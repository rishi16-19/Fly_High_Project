/* eslint-disable react/prop-types */
import { useState } from 'react'
import BookingDetails from '../components/BookingDetails'
import TotalFare from '../components/TotalFare'
import '../components/paymentPage.css'

const PaymentPage = ({data}) => {
  const [passangerData , setPassangerData] = useState([])
  const sendData = (passenger) =>{
    console.log(passenger)
    setPassangerData([...passangerData , passenger])
  }
    console.log(data)
  return (

    <div className='bookingContainer' style={{display:'flex' , flexDirection: 'column'}}>
      <h2>Complete Booking Details</h2>
      <div className="componenetsContainer" style={{display:'flex'}}>

        <BookingDetails data={data} sendData={sendData}/>
        <TotalFare data={data} passangerData = {passangerData}/>
      </div>
    </div>
  )
}

export default PaymentPage