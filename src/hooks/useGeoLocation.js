import { useState } from "react";

export default function useGeoLocation(){
    const [isLoading, setIsLoading] = useState(false)
    const [position, setPosition] = useState({})
    const [error, setError] = useState(null)

    function geoPosition(){
        if(!navigator.geolocation) return setError("Your browser doesn't support geolocation.")
        setIsLoading(true)
        navigator.geolocation.getCurrentPosition(
            (pos)=>{
                setPosition({
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude
                })
                setIsLoading(false)

        }, 
        (error)=>{
            setError(error.message)
            setIsLoading(false)
        })
        setIsLoading(false)
    }

    return {isLoading, position, error, geoPosition}
}