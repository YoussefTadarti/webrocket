var menuBtn = document.getElementById("btn-menu");
menuBtn.addEventListener("click", () => {
  menuBtn.parentElement.nextElementSibling.classList.toggle("show-links");
  menuBtn.setAttribute("aria-expanded", true);
  menuBtn.children[0].classList.toggle("active");
});
