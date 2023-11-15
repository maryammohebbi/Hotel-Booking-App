import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Menu from "./components/Menu"

function App() {

  return (
    <div className="relative">
        <Menu/>
      <div className="max-w-sm container mx-auto sm:max-w-lg md:max-w-2xl lg:max-w-5xl xl:max-w-7xl relative">
        <Banner/>
        <div className="w-full h-[900px] bg-pink-100"></div>
      </div>
        <Footer/>
    </div>
  )
}

export default App
