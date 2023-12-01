import "./App.css";
import Pixel from "./components/Pixel";

function inicioJuego() {
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
      if (
        document
          .querySelector(`.item${lugar[3]}`)
          .classList.contains(`isActive`)
      ) {
        clearInterval(juego);
        inicioJuego();
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
}

function App() {
  return (
    <>
      <main>
        <h1>Tetris</h1>
        <article className="grid-container">
          <Pixel />
        </article>
        <button onClick={inicioJuego}>inicio</button>
      </main>
    </>
  );
}

export default App;
