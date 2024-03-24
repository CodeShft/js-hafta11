import React, { useRef } from "react";

const App = ({ prop }) => {
  const prevPropRef = useRef(prop);

  useEffect(() => {
    console.log("Önceki prop:", prevPropRef.current);
    console.log("Güncel prop:", prop);
  }, [prop]);

  return (
    <div>
      <p>Prop: {prop}</p>
    </div>
  );
};

export default App;
