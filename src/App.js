import { useState } from "react";
import C1 from "./bilesenler/C1";
import GlobalContext from "./contexts/GlobalContext";

function App() {
  const [kullanici, kullaniciGuncelle] = useState("Orhan Gencebay");

  return (
    <GlobalContext.Provider value={kullanici}>
      <div>
        <h1>App</h1>
        <C1 />
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
