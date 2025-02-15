
const ShimmerMenu = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10">
        <div className="animate-pulse rounded-[20px] !bg-gray-500 w-full lg:w-[300px] h-[420px]"></div>
        <div className="animate-pulse rounded-[20px] !bg-gray-500 w-full lg:w-[940px] h-[420px]"></div>
    </div>
  )
}

export default ShimmerMenu