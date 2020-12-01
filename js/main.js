const header = document.querySelector('.header');
const hero = document.querySelector('.hero');

if (window.innerWidth < 600) {
  hero.style.marginTop = header.clientHeight + 0 + 'px';
} else {
  hero.style.marginTop = 50 + 'px';
}

window.addEventListener('resize', (e) => {
  if (window.innerWidth < 600) {
    hero.style.marginTop = header.clientHeight + 0 + 'px';
  } else {
    hero.style.marginTop = 50 + 'px';
  }
});
