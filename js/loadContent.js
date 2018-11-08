// Link rel import with html only works on a server, so run this through localhost!

// loading the html as nodes from the import links
let header = document.querySelector('link[href="header.html"]').import.querySelector('header');
let footer = document.querySelector('link[href="footer.html"]').import.querySelector('footer');

// adding the header to the top of the body
document.querySelector('body').insertBefore(header, document.querySelector('body').firstChild);

window.onload = function() { // waiting for the doc to be loaded

  // adding the footer the bottom of the page
  document.querySelector('body').appendChild(footer);

  // comparing the link name with the current page filename to add active class to the right nav link
  let navItems = document.querySelectorAll('nav li a');
  let pageName = window.location.pathname.split('/').pop();
  for (let item of navItems) {
    let href = item.href.split('/').pop();
    if (href === pageName) {
      item.classList.add('active');
    }
  }
};

// BLINK LOGO
// Swaps the still image with an animated gif on mouse over

const blunk = document.getElementById('blunk');

blunk.onmouseover = function() {
  this.src = 'img/GIF/logo-blink.gif';
};
blunk.onmouseleave = function() {
  this.src = 'img/logo-blink.png';
};
