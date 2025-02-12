
const ShimmerMart = () => {
    return (
      <div className="flex flex-wrap gap-5 justify-start">
         {[...Array(10)].map((_,index) => (
           <div key={index+"33"} className="w-[18.7%] h-[292px] rounded-[20px] animate-pulse !bg-gray-500"></div>
         ))}
      </div>
    )
  }
  
  export default ShimmerMart