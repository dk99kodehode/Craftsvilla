const footer = document.getElementById("footer");
window.addEventListener("scroll", checkScroll);

function checkScroll() {
  const scrollBottom = window.innerHeight + window.scrollY;

  const documentHeight = document.documentElement.scrollHeight;

  if (scrollBottom >= documentHeight - 5) {
    footer.classList.add("visible");
  } else {
    footer.classList.remove("visible");
  }
}
