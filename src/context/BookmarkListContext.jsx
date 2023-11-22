import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import toast from 'react-hot-toast'
import axios from 'axios'


const BookmarkContext = createContext()
const BASE_URL = "http://localhost:5000"

const initailState = {
    bookmarks: [],
    isLoading: false,
    currentBookmark: {},
    error: null
}

const bookmarkReducer = (state, action) => {
    switch(action.type){
        case "loading": return{
            ...state,
            isLoading: true,
        }
        case "bookmarks/loaded": return{
            ...state,
            isLoading: false,
            bookmarks: action.payload
        }
        case "bookmark/loaded": return{
            ...state,
            isLoading: false,
            currentBookmark: action.payload
        }
        case "bookmark/created": return{
            ...state,
            isLoading: false,
            bookmarks: [...state.bookmarks, action.payload],
            currentBookmark: action.payload
        }
        case "bookmark/deleted": return{
            ...state,
            isLoading: false,
            bookmarks: state.bookmarks.filter(item => item.id !== action.payload),
            currentBookmark: []
        }
        case "rejected": return{
            ...state,
            isLoading: false,
            error: action.payload
        }
        default:
            throw new Error("Unknown action")
    }
}

function BookmarkListContext({children}) {
    // const [bookmarks, setBookmarks] = useState([])
    // const [isLoading, setIsLoading] = useState(false)
    // const [currentBookmark, setCurrentBookmark] = useState({})

    // const [isLoadingCurrentBookmark, setIsLoading] = useState(false)
    // const {isLoading, data: bookmarks} = useFetch(`${BASE_URL}/bookmarks`)
    const [{bookmarks, isLoading, currentBookmark} ,dispatch] = useReducer(bookmarkReducer, initailState)
    useEffect(()=>{
        // setIsLoading(true)
        dispatch({type: "loading"})
        async function fetchData(){
            try {
                const {data} = await axios.get(`${BASE_URL}/bookmarks`)
                // setBookmarks(data)
                dispatch({type: "bookmarks/loaded", payload: data})
            } catch (err) {
                toast.error(err.message)
                dispatch({type: "rejected", payload: "An error accored in loading bookmarks."})
            }
            // finally{
            //     setIsLoading(false)
            // }
        }
        fetchData()
    }, [])

    async function getBookmark(id){
        // setIsLoading(true)
        dispatch({type: "loading"})
        try {
            const { data } = await axios.get(`${BASE_URL}/bookmarks/${id}`)
            // setCurrentBookmark(data)
            dispatch({type: "bookmark/loaded", payload: data})
        } catch (err) {
          toast.error(err.message)
          dispatch({type: "rejected", payload: "An error accured during loasing single bookmark."})
        }
        // finally{
        //     setIsLoading(false)
        // }
      }

      async function createBookmark(newBookmark){
        // setIsLoading(true)
        dispatch({type: "loading"})
        try {
            const {data} = await axios.post(`${BASE_URL}/bookmarks/`, newBookmark)
            // setCurrentBookmark(data)
            // setBookmarks(prev => [...prev, data])
            dispatch({type: "bookmark/created", payload: data})
        } catch (err) {
            toast.error(err.message)    
            dispatch({type: "rejected", payload: err.message})    
        }
        // finally{
        //     setIsLoading(false)
        // }
      }

      async function deleteBookmark(id){
        // setIsLoading(true)
        dispatch({type: "loading"})
        try {
            await axios.delete(`${BASE_URL}/bookmarks/${id}`)
            // setBookmarks(prev => prev.filter(item => item.id !== id))
            dispatch({type: "bookmark/deleted", payload:id})
        } catch (err) {
            toast.error(err.message)    
            dispatch({type: "rejected", payload: err.message})       
        }
        // finally{
        //     setIsLoading(false)
        // }
      }
  return (
    <BookmarkContext.Provider value={{bookmarks, isLoading, currentBookmark, getBookmark, createBookmark, deleteBookmark}}>
        {children}
    </BookmarkContext.Provider>
  )
}

export default BookmarkListContext

export function useBookmark(){
    return useContext(BookmarkContext)
}