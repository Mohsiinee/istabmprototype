const links = document.querySelectorAll('a[href], link[rel="stylesheet"][href], script[src]');
for (let i = 0; i < links.length; i++) {
  const href = links[i].getAttribute('href') || links[i].getAttribute('src');
  if (href && href[0] === '/') {
    links[i].setAttribute(links[i].nodeName === 'SCRIPT' ? 'src' : 'href', '/istabmprototype' + href);
  }
}
//Website introduction Card
const popup = document.getElementById("popup");
const bod = document.getElementById("body");
const closeBtn = document.getElementById("cls-popup");
document.addEventListener('DOMContentLoaded', () => {
  popup.style.display = 'flex';
});
closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
  bod.style.overflowY = 'scroll';
});