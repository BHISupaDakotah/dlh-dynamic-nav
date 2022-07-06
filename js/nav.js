/* 
Dynamic Navbar

- I don't care what content you have in the navbar
   - IE: logo on the left, links on the right
- Media queries that make the navbar responsive
  - at a particular breakpoint, display a hamburger instead of links
  - clicking the hamburger will open / close the menu showing links

*Advice: 
  - start with the pieces (html skeleton, styles, media queries, js)
  - Don't get hung up in one place too long (move on until nothing's left)
*/

const burger = document.querySelector(".burger-menu i");
const nav = document.querySelector(".nav-right");

function toggleNav() {
  burger.classList.toggle("fa-bars");
  burger.classList.toggle("fa-bars");
  nav.classList.toggle("nav-active");
}

burger.addEventListener("click", function () {
  toggleNav();
});
