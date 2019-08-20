window.onload = function () {
  var x = null;
  const accelerationHandler = (e) => {
    const { acceleration } = e;

    if (acceleration.x !== null) {
      x = acceleration.x;
      document.getElementById('root').innerHTML = x;
    }

    window.removeEventListener('devicemotion', accelerationHandler);
  };

  window.addEventListener('devicemotion', accelerationHandler);

  setTimeout(() => {
    if (x === null) {
      document.getElementById('root').innerHTML = 'noAcceleration';
    }
  }, 1500);
};
