const Pixel = () => {
  const cuadros = Array.from({ length: 240 }, (_, index) => (
    <div key={index} className={`grid-item item${index + 1}`}></div>
  ));
  return cuadros;
};

export default Pixel;
