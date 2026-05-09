const inputState = {
  pointerX: 0,
  pointerY: 0
};

const updateCoords = (e) => {
  const x = e.touches ? e.touches[0].clientX : e.clientX;
  const y = e.touches ? e.touches[0].clientY : e.clientY;
  
  inputState.pointerX = (x / window.innerWidth) * 100;
  inputState.pointerY = (y / window.innerHeight) * 100;
};

window.addEventListener('mousemove', updateCoords);
window.addEventListener('touchmove', updateCoords);

const getPos = (axis, format) => {
  const val = axis === 'x' ? inputState.pointerX : inputState.pointerY;
  
  if (format === 'px') {
    const pixelBase = axis === 'x' ? window.innerWidth : window.innerHeight;
    return `${Math.round((val / 100) * pixelBase)}px`;
  }
  
  return `${val.toFixed(2)}%`;
};
