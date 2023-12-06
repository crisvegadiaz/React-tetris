import verificarColision from "./colision";

function avance(lugar, random, color, inicioJuego) {

  document.addEventListener("keydown", (e) => {
    
    if (e.key == "ArrowLeft") {
      lugar = lugar.map((e) => (e -= 1));
    }
    if (e.key == "ArrowRight") {
      lugar = lugar.map((e) => (e += 1));
    }
  });

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

      if (verificarColision(lugar, random, juego, inicioJuego)) {
        return;
      }

      setTimeout(() => {
        item0.classList.remove(`${color}`, `isActive`);
        item1.classList.remove(`${color}`, `isActive`);
        item2.classList.remove(`${color}`, `isActive`);
        item3.classList.remove(`${color}`, `isActive`);
      }, 260);
    } else {
      clearInterval(juego);
      inicioJuego();
    }
  }, 300);
}

export default avance;
