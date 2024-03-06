/* eslint-disable react/prop-types */
import BookingDetails from '../components/BookingDetails'
import TotalFare from '../components/TotalFare'

const PaymentPage = ({data}) => {
    console.log(data)
  return (
    <div className='bookingContainer' style={{display:'flex' , flexDirection: 'column'}}>
      <h2>Complete Booking Details</h2>
      <div className="componenetsContainer" style={{display:'flex'}}>

        <BookingDetails data={data}/>
        <TotalFare data={data}/>
      </div>
    </div>
  )
}

export default PaymentPage