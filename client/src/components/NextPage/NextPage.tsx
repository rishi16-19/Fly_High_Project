import {useParams} from "react-router-dom";
import FlightList from "../FlightList/FlightList"
import Header from "../NavBar/NavBar"
import SideBar from "../SideBar/SideBar"

function NextPage() {
    const srcCodep = useParams();
    console.log(srcCodep)
    return (
      <>
        <Header />
        <div style={{ height: "82px" }}></div>
        <div>
          <div className='body'>
            <SideBar />
            <FlightList props={srcCodep}/>
          </div>
        </div>  
      </>
    )
  }
  
  export default NextPage
  