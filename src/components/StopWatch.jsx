import { useEffect, useState } from "react";

export const StopWatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setCurrentTime((prev) => prev + 10);
      }, 10);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setCurrentTime(0);
  };

  const formattedDateTime = (ms) => {
    const milliSeconds = (ms % 1000).toString().padStart(3, 0);
    const totalSeconds = Math.floor(ms / 1000);
    const seconds = (totalSeconds % 60).toString().padStart(2, 0);
    const minutes = Math.floor(totalSeconds / 60)
      .toString()
      .padStart(2, 0);

    return `${minutes} : ${seconds} : ${milliSeconds}`;
  };

  return (
    <div>
      <h2>{formattedDateTime(currentTime)}</h2>
      <button onClick={handleStart} disabled={isRunning}>
        start
      </button>
      <button onClick={handleReset}>reset</button>
      <button onClick={handleStop} disabled={!isRunning}>
        stop
      </button>
    </div>
  );
};
