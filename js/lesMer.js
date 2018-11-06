document.getElementById('lesMer').addEventListener('click', function() {
  setOffset(document.getElementById('intro').offsetTop, window.pageYOffset);
  scrollUntil();
});