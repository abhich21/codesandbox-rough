import { useEffect, useState } from "react";

const Watch = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const hours = (currentTime.getHours() % 12).toString().padStart(2, 0);
  const hours1 = hours.toString().padStart(2, 0);
  const minutes = currentTime.getMinutes().toString().padStart(2, 0);
  const seconds = currentTime.getSeconds().toString().padStart(2, 0);
  const ampm = hours >= 12 ? "PM" : "AM";

  return (
    <div>
      {hours} : {minutes} : {seconds} {ampm}{" "}
    </div>
  );
};

export default Watch;
