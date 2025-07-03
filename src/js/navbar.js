const navbar = document.getElementById('navbar');
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link-current");
const navLinksMobile = document.querySelectorAll(".nav-link-mobile");
const unorderedList = document.getElementById("unordered-list")

window.addEventListener('scroll', () => {
    if (window.scrollY > 800) {
        navbar.classList.add('shadow-md');
    } else {
        navbar.classList.remove('shadow-md');
    }
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('bg-white');
        unorderedList.classList.remove('text-white')
    } else {
        navbar.classList.remove('bg-white');
        unorderedList.classList.add('text-white')
    }
});



window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("text-amber-400");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("text-amber-400");
    }
  });

  navLinksMobile.forEach((link) => {
    link.classList.remove("text-black");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("text-black");
    }
  });
});