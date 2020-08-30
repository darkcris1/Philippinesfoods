const burger = document.getElementsByClassName("burger")[0];
const overlap = document.getElementsByClassName("overlap")[0];
const navLinks = document.getElementById("nav-links");
let flag = !0;

burger.addEventListener("click", () => {
  if (flag) {
    flag = !flag;
    navLinks.style.transition = "transform .3s";
    navLinks.style.transform = "translateX(0)";
    overlap.classList.add("active");
  } else {
    flag = !flag;
    navLinks.style.transform = "translateX(-100%)";
    setTimeout(() => {
      navLinks.style.transition = "none";
    }, 300);
    overlap.classList.remove("active");
  }
  overlap.addEventListener("click", function () {
    burger.click();
  });
});
window.onresize = function () {
  if (window.innerWidth > 1000) {
    navLinks.style.transform = "translateX(0)";
  } else {
    navLinks.style.transform = "translateX(-100%)";
  }
};

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries, self) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animationName = "swipe";
      self.unobserve(entry.target);
    }
  });
});

cards.forEach((card) => {
  observer.observe(card);
});
