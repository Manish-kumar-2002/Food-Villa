import { useEffect, useState } from "react"

const AboutFunction = () => {
    // define state variable in function Component
    const [countOne,setCountOne] = useState(1)
    const [countTwo,setCountTwo] = useState(2)

    useEffect(()=>{
        const setHiFunction=setInterval(()=>{
            console.log("Hi Parent Function");
        },1000) 
        console.log("useEffect()");

        return(()=>{
            clearInterval(setHiFunction)
            console.log("useEffect() return");
            
        })
    },[])
    

    console.log("function render()")
    return (
        <div className="p-4">
            <h1>About Function</h1>
            <div>{countOne} <button className="mb-2 pointer-events-auto ml-8 rounded-md bg-indigo-600 px-3 py-2 text-[0.8125rem]/5 font-semibold text-white hover:bg-indigo-500" onClick={()=>(setCountOne(countOne+1))}>click me</button> </div>
            <div>{countTwo} <button className="pointer-events-auto ml-8 rounded-md bg-indigo-600 px-3 py-2 text-[0.8125rem]/5 font-semibold text-white hover:bg-indigo-500" onClick={()=>(setCountTwo(countTwo+1))}>click me</button> </div>

        </div>
    )
}

export default AboutFunction