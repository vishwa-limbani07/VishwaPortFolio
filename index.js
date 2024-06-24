var typed = new Typed("#element", {
  strings: ["Designer", "Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});
var navItems = document.querySelectorAll(".nav-item");
for (var i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");

    current[0].className = current[0].className.replace(" active", "");

    this.className += " active";
  });
}
// const links = document.querySelectorAll(".nav-item");

// if (links.length) {
//   links.forEach((link) => {
//     link.addEventListener("click", (e) => {
//       links.forEach((link) => {
//         link.classList.remove("active");
//       });
//       e.preventDefault();
//       link.classList.add("active");
//     });
//   });
// }

// on scroll
// let section = document.querySelectorAll("section");
// let lists = document.querySelectorAll(".nav-item");
// function activeLink(li) {
//   lists.forEach((item) => item.classList.remove("active"));
//   li.classList.add("active");
// }
// lists.forEach((item) =>
//   item.addEventListener("click", function () {
//     activeLink(this);
//   })
// );

// window.onscroll = () => {
//   section.forEach((sec) => {
//     let top = window.scrollY;
//     let offset = sec.offsetTop;
//     let height = sec.offsetHeight;
//     let id = sec.getAttribute("id");

//     if (top >= offset && top < offset + height) {
//       const target = document.querySelector(`[href='#${id}']`).parentElement;
//       activeLink(target);
//     }
//   });
// };
