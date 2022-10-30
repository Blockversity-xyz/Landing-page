const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')
const btn_form = document.getElementById('form-toggle')
const div = document.getElementById('form')
div.style.display = "none"

btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
})

btn_form.addEventListener("click", () => {

  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
});
