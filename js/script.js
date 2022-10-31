const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');
const btn_form = document.getElementById('form-toggle');
const div = document.getElementById('form');

btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
})
