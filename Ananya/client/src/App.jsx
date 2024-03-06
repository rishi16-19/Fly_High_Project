import PaymentPage from "./pages/PaymentPage"
import './App.css'
import HomePage from "./pages/Homepage"
import LoginPage from "./components/loginpage"
import { Route,Routes } from "react-router-dom"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SignUp from "./components/signup"
import BookingDetails from "./components/BookingDetails"

function App() {
  const dummyData = [
    {flightCode:"ABC"  , sourceCode:"BBSR"  ,destCode:"CCU" ,  flightName:"Air Asia"  , flightDate:1 ,sourceTime: "20:20" ,destTime:"21:30" , price: 76372 },
    {flightCode:"BCD"  , sourceCode:"CCU"  ,destCode:"DEL" ,  flightName:"Indigo"  , flightDate:3 ,sourceTime:"17:35" ,destTime:"15:00" , price: 650 },
    {flightCode:"CDE"  , sourceCode:"DEL"  ,destCode:"BBSR" ,  flightName:"SpiceJet"  , flightDate:2 ,sourceTime:"16:25" ,destTime:"20:30" , price: 5 },
    {flightCode:"DEF"  , sourceCode:"BBI"  ,destCode:"MUM" ,  flightName:"Air India"  , flightDate:2 ,sourceTime:"10:40" ,destTime:"21:10" , price: 5000 },
    {flightCode:"EFG"  , sourceCode:"MUM"  ,destCode:"BBI" ,  flightName:"Air Asia"  , flightDate:3 ,sourceTime:"00:00" ,destTime:"4:50" , price: 500 }
  ]

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element= {<LoginPage />} />
      <Route path="/signup" element= {<SignUp />} />
      <Route path="/details" element= {<PaymentPage data={dummyData}/>} />
    </Routes>
     
    </>
  )
}

export default App
