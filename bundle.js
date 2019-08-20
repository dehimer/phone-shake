window.onload = function () {
  let x = null;
  const accelerationHandler = (e) => {
    const { acceleration } = e;

    if (acceleration.x !== null) {
      x = acceleration.x;
    }

    window.removeEventListener('devicemotion', accelerationHandler);
  };

  window.addEventListener('devicemotion', accelerationHandler);

  setTimeout(() => {
    if (x === null) {
      alert('noAcceleration');
    } else {
      alert(x);
    }
  }, 1500);
};
