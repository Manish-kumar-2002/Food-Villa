import { Outlet } from "react-router-dom"

const About = () => {
    return (
      <div className="about-us py-10">
      <div className="container">
        
        <h2 className="text-3xl font-bold whitespace-nowrap mb-4">About Us <Outlet /></h2>
        <h4 className="text-xl font-bold mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, mollitia!</h4>
        <p className="text-lg mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi vel sequi, consequuntur quisquam officia, omnis architecto labore molestias unde quod ullam necessitatibus rem tenetur! Ad ex repellat vel magnam ullam.</p>
        <img className='banner-img' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/DO_collectionBanner.png" alt="banner" />
      </div>
    </div>
    )
}

export default About