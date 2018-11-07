const blunk = document.getElementById('blunk');

//blunk.onmouseover(this.src = 'img/logo-blink.gif');
//blunk.onmouseleave(this.src = 'img/logo-blink.png');

blunk.onmouseover = function() {
    this.src = 'img/logo-blink.gif';
}

blunk.onmouseleave = function() {
    this.src = 'img/logo-blink.png';
}


//onmouseover="this.src='img/logo-blink.gif'"
//onmouseout="this.src='img/logo-blink.png'"