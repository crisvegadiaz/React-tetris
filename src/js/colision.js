function verificarColision(lugar, random, juego, inicioJuego) {
  switch (random) {
    case 0:
      if (
        document
          .querySelector(`.item${lugar[1]}`)
          .classList.contains(`isActive`) ||
        document
          .querySelector(`.item${lugar[3]}`)
          .classList.contains(`isActive`)
      ) {
        clearInterval(juego);
        inicioJuego();
        return true;
      }
      break;
    case 1:
      if (
        document
          .querySelector(`.item${lugar[3]}`)
          .classList.contains(`isActive`)
      ) {
        clearInterval(juego);
        inicioJuego();
        return true;
      }
      break;
    case 2:
      if (
        document
          .querySelector(`.item${lugar[2]}`)
          .classList.contains(`isActive`) ||
        document
          .querySelector(`.item${lugar[3]}`)
          .classList.contains(`isActive`)
      ) {
        clearInterval(juego);
        inicioJuego();
        return true;
      }
      break;
    case 3:
      if (
        document
          .querySelector(`.item${lugar[0]}`)
          .classList.contains(`isActive`) ||
        document
          .querySelector(`.item${lugar[2]}`)
          .classList.contains(`isActive`) ||
        document
          .querySelector(`.item${lugar[3]}`)
          .classList.contains(`isActive`)
      ) {
        clearInterval(juego);
        inicioJuego();
        return true;
      }
      break;
  }

  return false;
}

export default verificarColision;
