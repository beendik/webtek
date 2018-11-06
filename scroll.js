let progress = 0;
let offset = 0;

function setOffset(scrollTil, scrollFra) {
  offset = scrollTil;
  progress = scrollFra;
}

function scrollUntil() {
  progress += 40;
  window.scrollTo(0, progress);
  if (progress < offset) {
    requestAnimationFrame(scrollUntil);
  } else {
    progress = 0;
  }
}



