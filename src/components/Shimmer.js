
const Shimmer = () => {
  return (
    <div className="flex flex-wrap gap-5 justify-start">
       {[...Array(8)].map((_,index) => (
         <div key={index+"33"} className="w-[23.8%] h-[321px] rounded-[20px] animate-pulse !bg-gray-500"></div>
       ))}
    </div>
  )
}

export default Shimmer