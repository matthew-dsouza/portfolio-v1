/*==================== ADAPT FAVICON ====================*/
const faviconTag = document.getElementById("faviconTag");
const isDark = window.matchMedia("(prefers-color-scheme: dark)");

console.log(isDark.matches);

const changeFavicon = () => {
  if (isDark.matches) {
    faviconTag.href = "./src/img/favicon/apple-touch-icon-dark.png";
  } else {
    faviconTag.href = "./src/img/favicon/apple-touch-icon.png";
  }
};

changeFavicon();

/*==================== AUTOHIDE NAVBAR ON SCROLL-DOWN ====================*/
document.addEventListener("DOMContentLoaded", function () {
  el_autohide = document.querySelector(".autohide");

  // add padding-top to body (if necessary)
  navbar_height = document.querySelector(".navbar").offsetHeight;
  document.body.style.paddingTop = navbar_height + "px";

  if (el_autohide) {
    var last_scroll_top = 0;
    window.addEventListener("scroll", function () {
      let scroll_top = window.scrollY;
      if (scroll_top < last_scroll_top) {
        el_autohide.classList.remove("scrolled-down");
        el_autohide.classList.add("scrolled-up");
      } else {
        el_autohide.classList.remove("scrolled-up");
        el_autohide.classList.add("scrolled-down");
      }
      last_scroll_top = scroll_top;
    });
    window.addEventListener
  }
  // if
});
// DOMContentLoaded  end

/*==================== AUTOCLOSE NAVBAR ON CLICKING LINKS ====================*/
const navLinks = document.querySelectorAll(".nav-item");
const menuToggle = document.getElementById("navbarSupportedContent");
const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });
navLinks.forEach((l) => {
  l.addEventListener("click", () => {
    bsCollapse.toggle();
  });
});

/*==================== HERO BUTTON DELAY ====================*/
// this one causing issue while minifying
setTimeout(function () {
  document.querySelector(".hero_contents_button").style.visibility = "visible";
}, 1500);

/*==================== VISITOR COUNT ====================*/
// this one causing issue while minifying
const counterContainer = document.getElementById("visitor_count");
updateVisitorCount();
function updateVisitorCount() {
  let visits;
  if (!localStorage.getItem("visits")) {
    localStorage.setItem("visits", 1);
    counterContainer.innerHTML = localStorage.getItem("visits");
  }
  visits = +localStorage.getItem("visits");
  const incrementedCount = visits + 1;
  localStorage.setItem("visits", incrementedCount);
  counterContainer.innerHTML = localStorage.getItem("visits");
  
}

/*==================== SHOW TOOLTIPS ====================*/
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
