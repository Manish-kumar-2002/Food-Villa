import { useState, useEffect } from "react";

const useClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return time.toLocaleTimeString()
    // <div>
    //   <h2>Current Time:</h2>
    //   <p>{time.toLocaleTimeString()}</p>
    // </div>
};

export default useClock;