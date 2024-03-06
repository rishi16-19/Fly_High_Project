import './index.css'
import Header from './components/NavBar/NavBar'
import { Routes, Route } from 'react-router-dom'
import MiddlePage from './components/HomePage/HomePage'
import NextPage from './components/NextPage/NextPage'

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
