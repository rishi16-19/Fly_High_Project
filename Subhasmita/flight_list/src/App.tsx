import './index.css'
import FlightList from './components/FlightList/FlightList'
import SideBar from './components/SideBar/SideBar'

function App() {

  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<MiddlePage />} />
        <Route path="/list/:src/:dest/:dt" element={<NextPage />} />
      </Routes>
      
    </>
  )
}

export default App
