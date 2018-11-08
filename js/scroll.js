let progress = 0;
let offset = 0;

function setOffset(scrollTil, scrollFra) {
  offset = scrollTil;
  progress = scrollFra;
}

// running the scroll function until it has scrolled the right amount

function scrollUntil() {
  progress += 40;
  window.scrollTo(0, progress);
  if (progress < offset) {
    requestAnimationFrame(scrollUntil);
  } else {
    progress = 0;
  }
}

let initializer, target;

// comparing the file name of the current site to find the right trigger and target elements

if (window.location.pathname.split('/').pop() === 'index.html') {
  initializer = document.getElementById('lesMer');
  target = document.getElementById('intro');

} else if (window.location.pathname.split('/').pop() === 'bestilling.html') {
  initializer = document.getElementById('regnut');
  target = document.getElementById('prisvisning');
}


// adding the eventlistener to trigger element, adding correct target

initializer.addEventListener('click', function() {
  setOffset(target.offsetTop, window.pageYOffset);
  scrollUntil();
});


