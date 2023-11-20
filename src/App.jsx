import { Toaster } from "react-hot-toast"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Menu from "./components/Menu"
import LocationList from "./components/LocationList"
import { Route, Routes } from "react-router-dom"
import AppLayout from "./components/AppLayout"

function App() {

  return (
    <div>
      <Toaster/>
      <Menu/>
      <div className="max-w-sm container mx-auto sm:max-w-lg md:max-w-2xl lg:max-w-5xl xl:max-w-7xl relative">
        <Banner/>
        <Routes>
          <Route path="/" element={<LocationList/>}/>
          <Route path="/hotels" element={<AppLayout/>}>
            <Route index element={<div>Hotelllsssss!</div>}/>
            <Route path=":id" element={<div>Hotel</div>}/>
          </Route>
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
