import { useEffect } from "react"
import ProfileClassBased from "./ProfileClassBased"

const ProfileFuncionBased = () => {

    useEffect(()=>{
        console.log("useEffect");

        // const startTimerprofile = setInterval(()=>{
        //     console.log("start");   
        // },1000)

        return ()=>{
            console.log("useEffect Return");
            
            // (clearInterval(startTimerprofile))
        }
    },[])
    console.log("render()");


    return (
        <div className="container py-10">Profile Function<ProfileClassBased /></div>
        
    )
}

export default ProfileFuncionBased