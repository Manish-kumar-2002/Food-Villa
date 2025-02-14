
const Shimmer = () => {
  return (
    <div className="flex flex-wrap gap-5 justify-start">
       {[...Array(8)].map((_,index) => (
         <div key={index+"33"} className="w-[100%] md:w-[31.6%]  lg:w-[23.7%] h-[321px] rounded-[20px] animate-pulse !bg-gray-500"></div>
       ))}
    </div>
  )
}

export default Shimmer