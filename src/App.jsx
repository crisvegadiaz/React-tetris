import "./App.css";
import Pixel from "./components/Pixel";
import { useState } from "react";
import avance from "./js/avance";

const forma = [
  [5, 15, 16, 26],
  [5, 15, 25, 35],
  [5, 6, 15, 16],
  [5, 6, 7, 16],
];

function App() {
  const [inicio, setInicio] = useState(true);

  const inicioJuego = () => {
    setInicio(false);

    let random = Math.floor(Math.random() * 4),
      color = ["red", "yellow", "blue", "green"][random],
      lugar = forma[random];

    avance(lugar, random, color, inicioJuego)
  };
  return (
    <>
      <main>
        <h1>Tetris</h1>
        <article className="grid-container">
          <Pixel />
        </article>
        {inicio && <button onClick={inicioJuego}>inicio</button>}
      </main>
    </>
  );
}

export default App;
