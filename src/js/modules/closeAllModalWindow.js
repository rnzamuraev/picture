const closeAllModalWindow = () => {
  const window = document.querySelectorAll("[data-modal]");

  window.forEach((item) => {
    item.style.display = "none";
  });
};

export default closeAllModalWindow;
