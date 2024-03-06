import { useLocation} from "react-router-dom";
import FlightList from "../FlightList/FlightList"
import Header from "../NavBar/NavBar"
import SideBar from "../SideBar/SideBar"

function NextPage() {
    const data = useLocation().state
    console.log(data)
    return (
      <>
        <Header />
        <div style={{ height: "82px" }}></div>
        <div>
          <div className='body'>
            <SideBar />
            <FlightList props={data}/>
          </div>
        </div>  
      </>
    )
  }
  
  export default NextPage
  