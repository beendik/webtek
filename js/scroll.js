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

let initializer;

if (window.location.pathname.split('/').pop() === 'index.html') {
  initializer = document.getElementById('lesMer');
  console.log(window.location.pathname.split('/').pop());
} else if (window.location.pathname.split('/').pop() === 'bestilling.html') {
  initializer = document.getElementById('regnut');
}

initializer.addEventListener('click', function() {
  setOffset(document.getElementById('intro').offsetTop, window.pageYOffset);
  scrollUntil();
})


