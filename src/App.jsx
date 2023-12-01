import "./App.css";
import Pixel from "./components/Pixel";
import verificarColision from "./js/colision";
import { useState } from "react";

function App() {
  const [inicio, setInicio] = useState(true);

  const inicioJuego = () => {
    setInicio(false);

    let forma = [
      [5, 15, 16, 26],
      [5, 15, 25, 35],
      [5, 6, 15, 16],
      [5, 6, 7, 16],
    ];
    let randon = Math.floor(Math.random() * 4),
      color = ["red", "yellow", "blue", "green"][randon],
      lugar = forma[randon];

    let juego = setInterval(() => {
      const item0 = document.querySelector(`.item${lugar[0]}`);
      const item1 = document.querySelector(`.item${lugar[1]}`);
      const item2 = document.querySelector(`.item${lugar[2]}`);
      const item3 = document.querySelector(`.item${lugar[3]}`);

      item0.classList.add(`${color}`, `isActive`);
      item1.classList.add(`${color}`, `isActive`);
      item2.classList.add(`${color}`, `isActive`);
      item3.classList.add(`${color}`, `isActive`);

      if (lugar[3] < 231) {
        lugar = lugar.map((e) => (e += 10));

        if (verificarColision(lugar, randon, juego, inicioJuego)) {
          return;
        }

        setTimeout(() => {
          item0.classList.remove(`${color}`, `isActive`);
          item1.classList.remove(`${color}`, `isActive`);
          item2.classList.remove(`${color}`, `isActive`);
          item3.classList.remove(`${color}`, `isActive`);
        }, 500);
      } else {
        clearInterval(juego);
        inicioJuego();
      }
    }, 600);
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
