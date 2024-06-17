import { useState, useEffect } from "react";
export const Watch = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes().toString().padStart(2, 0);
  const seconds = currentTime.getSeconds().toString().padStart(2, 0);
  const ampm = hours >= 12 ? "PM" : "AM";

  return (
    <>
      {hours % 12} : {minutes} :{seconds} {ampm}
    </>
  );
};
