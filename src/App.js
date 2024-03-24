import React, { useState, useRef } from "react";

const App = () => {
  const [sayi, setSayi] = useState(0);
  const [can, setCan] = useState(3);

  const sayiRef = useRef(0);

  useEffect(() => {
    sayiRef.current++
    
    console.log("Sayi değişti:", sayi);
    console.log("SayiRef değeri:", sayiRef.current);
  }, [sayi]);

  return (
    <div>
      <p>Sayi: {sayi}</p>
      <button onClick={() => setSayi(eskiDeger=>eskiDeger+5)}>Sayıyı Arttır(+5)</button>
      <button onClick={() => setSayi(eskiDeger=>eskiDeger-3)}>Sayıyı Arttır(-3)</button>

      <button onClick={() => setCan(eskiDeger=>eskiDeger-1)}>Canı Azalt(-1)</button>
    </div>
  );
};

export default App;
