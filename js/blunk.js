const blunk = document.getElementById('blunk');
console.log(blunk);

blunk.onmouseover = function() {
  this.src = 'img/logo-blink.gif';
};
blunk.onmouseleave = function() {
  this.src = 'img/logo-blink.png';
};