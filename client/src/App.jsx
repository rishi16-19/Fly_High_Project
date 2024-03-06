import PaymentPage from "./pages/PaymentPage"
import './App.css'
import { Route, Routes } from "react-router-dom"

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./pages/Homepage"
import LoginComponent from "./components/loginpage"
import Register from "./components/signup"
import Form from "./pages/formcomponent";
import Header from "./components/headercomp";
import MiddlePage from "./components/middlecomp";

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
    <Header />
    <div style={{height:'5rem'}}></div>
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/login" element= {<LoginComponent />} />
      <Route path="/signup" element= {<Register />} />
      <Route path="/details" element= {<PaymentPage data={dummyData[0]}/>} />
      <Route path="/final" element={<Form />} /> */}
    </Routes>
    </>
  )
}

export default App
