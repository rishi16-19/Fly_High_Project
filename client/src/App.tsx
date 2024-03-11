import './index.css'
import Header from './components/NavBar/NavBar'
import { Routes, Route } from 'react-router-dom'
import NextPage from './components/NextPage/NextPage'
import HomePage from './components/HomePage/Home'
import Home from './components/HomePage/Home'
import PaymentPage from './pages/PaymentPage'
import LoginComponent from './components/loginpage'
import './App.css'
import Forms from './components/formcomponent'

function App() {
  console.log(sessionStorage.getItem('username'))
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list/:src/:dest/:dt" element={<NextPage />} />
        <Route path="/details" element={<PaymentPage />} />
        <Route path="/login" element={<LoginComponent />} />\
        <Route path="/final" element={<Forms />} />

      </Routes>

    </>
  )
}

export default App
