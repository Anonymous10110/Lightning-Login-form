const lightning = document.querySelector('.lightning');

function randomFlash() {
  lightning.style.animation = 'none';
  void lightning.offsetWidth; // Trigger reflow
  lightning.style.animation = `lightningFlash ${Math.random() * 5 + 3}s infinite`;
}

setInterval(randomFlash, 7000);