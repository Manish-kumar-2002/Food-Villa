import { Outlet } from "react-router-dom"
import AboutFunction from "./AboutFunction"
import AboutClass from "./AboutClass"
import useClock from "../utils/useClock"

const About = () => {

  const CurrentTime = useClock()
    return (
      <div className="about-us py-10">
      <div className="container">
        <img className='banner-img mb-5' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/DO_collectionBanner.png" alt="banner" />
        <h2 className="text-3xl font-bold whitespace-nowrap mb-4">About Us <Outlet /></h2>
        <h4 className="text-xl font-bold mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, mollitia!</h4>
        <p className="text-lg mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi vel sequi, consequuntur quisquam officia, omnis architecto labore molestias unde quod ullam necessitatibus rem tenetur! Ad ex repellat vel magnam ullam.</p>
        <strong className="text-3xl font-bold whitespace-nowrap mb-4">{CurrentTime}</strong>
        <AboutFunction />
        <AboutClass />
      </div>
    </div>
    )
}

export default About