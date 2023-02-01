const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');

fetch('nav.html')
  .then(res => res.text())
  .then(data => {
    nav.innerHTML = data;
  });

menu.addEventListener('click', () => {
  nav.classList.toggle('show');
});


let width = window.innerWidth;

window.onresize = function() {
  if (width !== window.innerWidth) {
    updateSize();
    width = window.innerWidth;
  }
};

function updateSize() {
  document.body.style.width = window.innerWidth + "px";
  document.querySelector('.homeWrapper').style.width = window.innerWidth + "px";
  document.querySelector('.mainText').style.width = window.innerWidth + "px";
  document.querySelector('.top').style.width = window.innerWidth + "px";
  document.querySelector('.homeContent').style.width = window.innerWidth + "px";
  document.querySelector('.his').innerHTML = window.innerWidth;
}
