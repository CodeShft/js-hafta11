import React, { useEffect, useRef, useState } from "react";

const App = ({ prop }) => {

  const [sayac, sayacGuncelle] = useState(0) 
  const prevPropRef = useRef(prop) 

  useEffect(() => {
    console.log("Önceki prop:", prevPropRef.current);
    console.log("Güncel prop:", prop);
    
    prevPropRef.current = prop
  }, [prop]);

  return (
    <div>
      <p>Prop: {prop}</p>
    </div>
  );
};

export default App;
