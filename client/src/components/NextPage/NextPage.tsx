import {useParams} from "react-router-dom";
import FlightList from "../FlightList/FlightList"
import Header from "../NavBar/NavBar"
import SideBar from "../SideBar/SideBar"
import { useEffect, useState } from "react";
import axios from "axios";

function NextPage() {
    const srcCodep = useParams()
    const [oneFlightData, setOneFlightData] = useState([])
    const [twoFlightData, setTwoFlightData] = useState([])
    useEffect(() => {
      const getFlight = (async () => {
        const {data} = await axios.get(`http://localhost:8080/flight/${srcCodep.src}/${srcCodep.dest}/${srcCodep.dt}`);
        console.log(data)
        setTwoFlightData(data[0]);
        setOneFlightData(data[1]);
      })
      getFlight();
    },[])
   
    console.log(srcCodep)
    return (
      <>
        <Header />
        <div style={{ height: "82px" }}></div>
        <div>
          <div className='body'>
            <SideBar />
            <FlightList oneFlightData={oneFlightData} twoFlightData={twoFlightData}/>
          </div>
        </div>  
      </>
    )
  }
  
  export default NextPage
  