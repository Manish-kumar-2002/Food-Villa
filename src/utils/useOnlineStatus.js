import { useEffect, useState } from "react"

const useOnlineStatus = () => {

    const [isOnline,setIsOnline] = useState()

    

    useEffect(()=>{

        const setOnline = ()=>{
            setIsOnline(false)
        }
        const setOffline = ()=>{
            setIsOnline(true)
        }

        window.addEventListener("online",setOnline)
        window.addEventListener("offline",setOffline)

        return (() => {
            window.removeEventListener("online",setOnline)
            window.removeEventListener("ofline",setOffline)
        })
    }, []);


    return isOnline
}

export default useOnlineStatus