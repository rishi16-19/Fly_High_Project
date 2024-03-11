/* eslint-disable react/prop-types */
import React from 'react'
import { useState ,useEffect} from 'react'
import BookingDetails from '../components/BookingDetails'
import TotalFare from '../components/TotalFare'
import './paymentPage.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { DataProvider } from '../components/Context'
const PaymentPage = () => {
  const navigate = useNavigate()
  useEffect(()=>{
    if(sessionStorage.getItem('username') === null){
      navigate('/login')
    }
  },[])
  
  const data = useLocation().state
  console.log(data)
  // console.log(data)
  const [passangerData , setPassangerData] = useState([])
  const sendData = (passenger) =>{
    console.log(passenger)
    setPassangerData([...passangerData , passenger])
  }
  return (
    
      <DataProvider>
    <div className='bookingContainer' style={{display:'flex' , flexDirection: 'column' , marginTop: '4rem'}}>
      <h2>Complete Booking Details</h2>
      <div className="componenetsContainer" style={{display:'flex'}}>

        <BookingDetails data={data} sendData={sendData}/>
        <TotalFare data={data} passangerData = {passangerData}/>
      </div>
    </div>
    </DataProvider>
  )
}

export default PaymentPage