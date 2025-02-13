import { Outlet } from "react-router-dom"
import AboutFunction from "./AboutFunction"
import AboutClass from "./AboutClass"
import useClock from "../utils/useClock"
import { useState } from "react"


const Section = ({title,discription,isVisible,setIsVisible}) =>{

    return(
      <div className="">
        <h4 className="p-4 bg-slate-700 rounded-2xl mb-4 cursor-pointer" onClick={()=>setIsVisible()}>{title}</h4>
       { isVisible && (<p className="px-2 rounded-2xl mb-4">{discription}</p>)}
      </div>
    )
}

const About = () => {

  const[activeIndex,setActiveIndex] = useState(0)

  const CurrentTime = useClock()
    return (
      <div className="about-us py-10">
      <div className="container">
        <img className='banner-img mb-5' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/DO_collectionBanner.png" alt="banner" />
        <h2 className="text-3xl font-bold whitespace-nowrap mb-4">About Us <Outlet /></h2>
        <h4 className="text-xl font-bold mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, mollitia!</h4>
        <p className="text-lg mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi vel sequi, consequuntur quisquam officia, omnis architecto labore molestias unde quod ullam necessitatibus rem tenetur! Ad ex repellat vel magnam ullam.</p>


        <Section title={"important"} discription={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi vel sequi, consequuntur quisquam officia, omnis architecto labore molestias unde quod ullam necessitatibus rem tenetur! Ad ex repellat vel magnam ullam."} isVisible={activeIndex === 0} setIsVisible={()=>{(activeIndex===0)? setActiveIndex():setActiveIndex(0) }} />
        <Section title={"Not important"} discription={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi vel sequi, consequuntur quisquam officia, omnis architecto labore molestias unde quod ullam necessitatibus rem tenetur! Ad ex repellat vel magnam ullam."} isVisible={activeIndex === 1} setIsVisible={()=>{(activeIndex===1)?setActiveIndex():setActiveIndex(1)}}  />
        {/* <Section title={"is important"} discription={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi vel sequi, consequuntur quisquam officia, omnis architecto labore molestias unde quod ullam necessitatibus rem tenetur! Ad ex repellat vel magnam ullam."} isVisible={activeIndex === 2} setActiveIndex={4}  />
        <Section title={"is Not important"} discription={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi vel sequi, consequuntur quisquam officia, omnis architecto labore molestias unde quod ullam necessitatibus rem tenetur! Ad ex repellat vel magnam ullam."} isVisible={activeIndex === 3} setActiveIndex={4}  /> */}


        <strong className="text-3xl font-bold whitespace-nowrap mb-4">{CurrentTime}</strong>
        <AboutFunction />
        <AboutClass />
      </div>
    </div>
    )
}

export default About