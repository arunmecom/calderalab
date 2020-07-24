import { load } from "@shopify/theme-sections";
import "../sections/product";

load("*");

const acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = `${panel.scrollHeight}px`;
    }
  });
}

const navbar = document.getElementById("header");

const onScroll = () => {
  const scroll = document.documentElement.scrollTop;
  if (screen.width <= 769) {
    if (scroll > 0) {
      navbar.classList.add("header-bg");
    } else {
      navbar.classList.remove("header-bg");
    }
  }
};

window.addEventListener("scroll", onScroll);
