import calcScroll from "./calcScroll";

const burger = (
  menuSelector,
  burgerSelector,
  headerMenuSelector,
  wrap,
  burgerMenuSub,
  burgerMenuLink
) => {
  const menuElem = document.querySelector(menuSelector),
    burgerElem = document.querySelector(burgerSelector),
    headerMenu = document.querySelector(headerMenuSelector),
    listElement = document.querySelector(wrap),
    subs = document.querySelectorAll(burgerMenuSub),
    elements = listElement.querySelectorAll("a");

  const body = document.body;
  const scroll = calcScroll();
  const overlay = document.querySelector(".overlay");

  menuElem.style.display = "none";

  function subMenuHideAll() {
    subs.forEach((sub) => {
      sub.style.display = "none";
      sub.previousElementSibling.classList.remove("active");
    });
  }

  if (window.screen.availWidth < 993) {
    headerMenu.style.display = "none";
  } else {
    headerMenu.style.display = "block";
    menuElem.style.display = "none";
  }

  burgerElem.addEventListener("click", () => {
    if (
      menuElem.style.display == "none" &&
      window.screen.availWidth < 993
    ) {
      menuElem.style.display = "flex";
      overlay.style.display = "block";
      body.style.overflow = "hidden";
      body.style.paddingRight = `${scroll}px`;
      subMenuHideAll();
    } else {
      menuElem.style.display = "none";
      overlay.style.display = "none";
      body.style.overflow = "";
      body.style.paddingRight = `0px`;
    }
  });

  window.addEventListener("resize", () => {
    if (window.screen.availWidth < 993) {
      headerMenu.style.display = "none";
    } else {
      headerMenu.style.display = "block";
      menuElem.style.display = "none";
      overlay.style.display = "none";
      body.style.overflow = "";
      body.style.paddingRight = `0px`;
    }
  });
  overlay.addEventListener("click", (e) => {
    if (e.target.classList.contains("overlay")) {
      subMenuHideAll();
      menuElem.style.display = "none";
      overlay.style.display = "none";
      body.style.overflow = "";
      body.style.paddingRight = `0px`;
    }
  });

  elements.forEach((element) => {
    element.addEventListener("click", (e) => {
      openSubMenu(e);
      if (!e.target.classList.contains(burgerMenuLink)) {
        subMenuHideAll();
        menuElem.style.display = "none";
        overlay.style.display = "none";
        body.style.overflow = "";
        body.style.paddingRight = `0px`;
      }
    });
  });

  function openSubMenu(e) {
    if (e.target.classList.contains(burgerMenuLink)) {
      if (
        e.target.nextElementSibling.style.display === "none"
      ) {
        subMenuHideAll();
        e.target.nextElementSibling.style.display = "block";
        e.target.classList.add("active");
      } else {
        e.target.nextElementSibling.style.display = "none";
        e.target.classList.remove("active");
      }
    }
  }
};

export default burger;
