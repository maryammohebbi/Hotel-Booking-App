import React, { createContext, useContext, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import toast from 'react-hot-toast'
import axios from 'axios'


const BookmarkContext = createContext()
const BASE_URL = "http://localhost:5000"

function BookmarkListContext({children}) {
    const [currentBookmark, setCurrentBookmark] = useState({})
    const [isLoadingCurrentBookmark, setIsLoadingCurrentBookmark] = useState(false)

    const {isLoading, data: bookmarks} = useFetch(`${BASE_URL}/bookmarks`)

    async function getBookmark(id){
        setIsLoadingCurrentBookmark(true)
        try {
            const { data } = await axios.get(`${BASE_URL}/bookmarks/${id}`)
            setCurrentBookmark(data)
        } catch (err) {
          toast.error(err.message)
        }
        finally{
            setIsLoadingCurrentBookmark(false)
        }
      }
  return (
    <BookmarkContext.Provider value={{bookmarks, isLoading, currentBookmark, getBookmark}}>
        {children}
    </BookmarkContext.Provider>
  )
}

export default BookmarkListContext

export function useBookmark(){
    return useContext(BookmarkContext)
}