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