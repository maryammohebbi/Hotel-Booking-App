import Banner from "./components/Banner"

function App() {

  return (
    <div className="w-screen h-screen p-1 relative">
      <div className="max-w-sm h-full container mx-auto sm:max-w-lg md:max-w-2xl lg:max-w-5xl xl:max-w-7xl">
        <Banner/>
      </div>
    </div>
  )
}

export default App
