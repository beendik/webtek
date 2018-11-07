let header = document.querySelector('link[href="header.html"]').import.querySelector('header');
let footer = document.querySelector('link[href="footer.html"]').import.querySelector('footer');

document.querySelector('body').insertBefore(header, document.querySelector('body').firstChild);
document.querySelector('body').appendChild(footer);

let navItems = document.querySelectorAll('nav li a');
let pageName = window.location.pathname.split('/').pop();
for (let item of navItems) {
  let href = item.href.split('/').pop();
  if (href === pageName) {
    item.classList.add('active');
  }
}
