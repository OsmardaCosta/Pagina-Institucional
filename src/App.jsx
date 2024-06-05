import Container from "./Components/LandingPage"
import Login from "./Components/Login"
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Container/>}/>
            <Route path="/Login" element={<Login/>}/>
        </Routes>
    </BrowserRouter>
  )
}