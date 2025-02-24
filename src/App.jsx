import { Outlet } from "react-router"
import Navbar from "./components/nav/Navbar"

function App() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default App
