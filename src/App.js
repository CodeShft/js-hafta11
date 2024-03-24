import { useRef, useState } from "react";

function App() {
  const [sayac, sayacGuncelle] = useState(0)

  const puan = useRef(0)

  function puanGuncelle() {
    puan.current += 10
    alert(puan.current)
  }

  return (
    <div>
      Puan: {puan.current}

      <div>
        {sayac}
        <button onClick={ ()=>{ sayacGuncelle(eskiDeger=>eskiDeger+5) } }>Sayaç Arttır</button>
      </div>
      <div>
        <button onClick={puanGuncelle}>Ref Değeri Güncelle</button>
      </div>
    </div>
  );
}

export default App;
