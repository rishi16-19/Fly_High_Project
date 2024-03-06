import React from 'react'
import BookingDetails from '../components/BookingDetails'
import TotalFare from '../components/TotalFare'

const PaymentPage = ({data}) => {
    console.log(data)
  return (
    <div className='bookingContainer'>
        <BookingDetails data={data}/>
        <TotalFare data={data}/>
    </div>
  )
}

export default PaymentPage