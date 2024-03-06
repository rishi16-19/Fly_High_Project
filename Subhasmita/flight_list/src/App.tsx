import './index.css'
import FlightList from './components/FlightList/FlightList'
import SideBar from './components/SideBar/SideBar'

function App() {

  return (
    <>
    <div className='body'>
      <SideBar/>
      <FlightList/>
    </div>
      
    </>
  )
}

export default App
