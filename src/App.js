import React, { useRef, useState } from 'react';

function Timer() {
  const [sayac, sayacGuncelle] = useState(0)
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
    <div> {intervalRef.current}
      <button onClick={startTimer}>Start Timer</button>
      <button onClick={stopTimer}>Stop Timer</button>
      <br />
      {sayac}
      <button onClick={ ()=>{ sayacGuncelle( eskiDeger=>eskiDeger+5 ) } }>Sayaç arttır (+5)</button>
    </div>
  );
}

export default Timer;
