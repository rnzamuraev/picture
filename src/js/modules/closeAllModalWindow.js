const closeAllModalWindow = () => {
  const window = document.querySelectorAll("[data-modal]");

  window.forEach((item) => {
    item.style.display = "none";
    item.classList.add("animated", "fadeIn");
  });
};

export default closeAllModalWindow;
