import { Toaster } from "react-hot-toast"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Menu from "./components/Menu"
import LocationList from "./components/LocationList"
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <div className="relative">
      <Toaster/>
      <Menu/>
      <div className="max-w-sm container mx-auto sm:max-w-lg md:max-w-2xl lg:max-w-5xl xl:max-w-7xl relative">
        <Banner/>
        <Routes>
          <Route path="/" element={<LocationList/>}/>
        </Routes>
      </div>
      {/* <Footer/> */}
    </div>
  )
}

export default App
