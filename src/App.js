import React, { useRef } from 'react';

function Timer() {
  const intervalRef = useRef();

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      console.log('Timer tick');
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <div>
      <button onClick={startTimer}>Start Timer</button>
      <button onClick={stopTimer}>Stop Timer</button>
    </div>
  );
}

export default Timer;
