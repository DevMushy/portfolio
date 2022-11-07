const container = document.querySelector('.container')
container.addEventListener('animationend', () => {
  window.location.replace("../pages/home.html");
  container.classList.remove('active');
});