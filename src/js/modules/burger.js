const burger = (
  menuSelector,
  burgerSelector,
  headerMenuSelector
) => {
  const menuElem = document.querySelector(menuSelector),
    burgerElem = document.querySelector(burgerSelector),
    headerMenu = document.querySelector(headerMenuSelector);

  menuElem.style.display = "none";

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
      menuElem.style.display = "block";
    } else {
      menuElem.style.display = "none";
    }
  });

  window.addEventListener("resize", () => {
    if (window.screen.availWidth < 993) {
      headerMenu.style.display = "none";
    } else {
      headerMenu.style.display = "block";
      menuElem.style.display = "none";
    }
  });
};

export default burger;
