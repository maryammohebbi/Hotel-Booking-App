import { Toaster } from "react-hot-toast"
import Footer from "./components/Footer"
import Menu from "./components/Menu"
import LocationList from "./components/LocationList"
import { Route, Routes } from "react-router-dom"
import AppLayout from "./components/AppLayout"
import Hotels from "./components/Hotels"
import HotelProvider from "./context/HotelProvider"
import SingleHotel from "./components/SingleHotel"
import BookmarkLayout from "./components/BookmarkLayout"
import BookmarkListContext from "./context/BookmarkListContext"
import Bookmark from "./components/Bookmark"
import SingleBookmark from "./components/SingleBookmark"
import AddNewBookmark from "./components/AddNewBookmark"
import Login from "./components/Login"
import About from "./components/About"
import AuthProvider from "./context/AuthProvider"

function App() {

  return ( 
      <AuthProvider>
        <BookmarkListContext>
          <HotelProvider>
            <Toaster/>
            <Menu/>
            <div className="max-w-sm container mx-auto sm:max-w-lg md:max-w-2xl lg:max-w-5xl xl:max-w-7xl relative">
              <Routes>
                <Route path="/" element={<LocationList/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/hotels" element={<AppLayout/>}>
                  <Route index element={<Hotels/>}/>
                  <Route path=":id" element={<SingleHotel/>}/>
                </Route>
                <Route path="/bookmark" element={<BookmarkLayout/>}>
                  <Route index element={<Bookmark/>}/>
                  <Route path=":id" element={<SingleBookmark/>}/>
                  <Route path="add" element={<AddNewBookmark/>}/>
                </Route>
              </Routes>
            </div>
            <Footer/>
          </HotelProvider>
        </BookmarkListContext>
      </AuthProvider>
    
  )
}

export default App
