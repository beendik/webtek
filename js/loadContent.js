let header = document.querySelector('link[href="header.html"]').import.querySelector('header');
let footer = document.querySelector('link[href="footer.html"]').import.querySelector('footer');

document.querySelector('body').insertBefore(header, document.querySelector('body').firstChild);

window.onload = async function() {
  document.querySelector('body').appendChild(footer);
};

let navItems = document.querySelectorAll('nav li a');
let pageName = window.location.pathname.split('/').pop();
for (let item of navItems) {
  let href = item.href.split('/').pop();
  if (href === pageName) {
    item.classList.add('active');
  }
}

// load blinking logo

  const blunk = document.getElementById('blunk');
  console.log(blunk);

  blunk.onmouseover = function() {
    this.src = 'img/logo-blink.gif';
  };
  blunk.onmouseleave = function() {
    this.src = 'img/logo-blink.png';
  };
