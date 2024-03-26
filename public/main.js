const $ = document.querySelector.bind(document);

const navBar = $("#nav");
const headerBtn = $("#header-btn");

window.addEventListener("click", (e) => {
  if (headerBtn.contains(e.target)) {
    navBar.classList.toggle("hidden");
    navBar.classList.toggle("nav-expand");
  } else {
    if (navBar.classList.contains("nav-expand")) {
      navBar.classList.toggle("hidden");
      navBar.classList.toggle("nav-expand");
    }
  }
});

const btn = $("#btn");
const box = $(".box");
btn.onclick = () => {
  box.classList.toggle("abcd");
};
