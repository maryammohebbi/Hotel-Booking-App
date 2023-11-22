import React, { createContext, useContext, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import toast from 'react-hot-toast'
import axios from 'axios'


const BookmarkContext = createContext()
const BASE_URL = "http://localhost:5000"

function BookmarkListContext({children}) {
    const [bookmarks, setBookmarks] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [currentBookmark, setCurrentBookmark] = useState({})

    // const [isLoadingCurrentBookmark, setIsLoading] = useState(false)
    // const {isLoading, data: bookmarks} = useFetch(`${BASE_URL}/bookmarks`)
    useEffect(()=>{
        setIsLoading(true)
        async function fetchData(){
            try {
                const {data} = await axios.get(`${BASE_URL}/bookmarks`)
                setBookmarks(data)
            } catch (err) {
                toast.error(err.message)
            }
            finally{
                setIsLoading(false)
            }
        }
        fetchData()
    }, [])

    async function getBookmark(id){
        setIsLoading(true)
        try {
            const { data } = await axios.get(`${BASE_URL}/bookmarks/${id}`)
            setCurrentBookmark(data)
        } catch (err) {
          toast.error(err.message)
        }
        finally{
            setIsLoading(false)
        }
      }

      async function createBookmark(newBookmark){
        setIsLoading(true)
        try {
            const {data} = await axios.post(`${BASE_URL}/bookmarks/`, newBookmark)
            setCurrentBookmark(data)
            setBookmarks(prev => [...prev, data])
        } catch (err) {
            toast.error(err.message)        
        }
        finally{
            setIsLoading(false)
        }
      }
  return (
    <BookmarkContext.Provider value={{bookmarks, isLoading, currentBookmark, getBookmark, createBookmark}}>
        {children}
    </BookmarkContext.Provider>
  )
}

export default BookmarkListContext

export function useBookmark(){
    return useContext(BookmarkContext)
}