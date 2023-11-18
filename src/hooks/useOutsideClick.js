import { useEffect } from "react";

export default function useOutsideClick(ref, exeptionId, cb){
    useEffect(()=>{
        function handleOusideClick(event){
            if(ref.current && !ref.current.contains(event.target) && event.target.id !== exeptionId )
            cb()
        }
        document.addEventListener("mousedown", handleOusideClick)

        return()=>{
            document.removeEventListener("mousedown", handleOusideClick)
        }
    },[ref, cb])
}