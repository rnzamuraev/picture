import closeAllModalWindow from "./closeAllModalWindow.js";
import calcScroll from "./calcScroll.js";

const modals = () => {
  const scroll = calcScroll();
  let btnPresset = false;

  function bindModal(
    openSelector,
    modalSelector,
    closeSelector,
    destroy = false
  ) {
    const open = document.querySelectorAll(openSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelectorAll(closeSelector);
    // close = document.querySelector(closeSelector);
    // const prise = document.querySelectorAll(".fixed-gift");
    // console.log(prise);

    open.forEach((item) => {
      item.addEventListener("click", (e) => {
        if (e.target) {
          e.preventDefault();
          closeAllModalWindow();
          modal.style.display = "block";
          document.body.style.overflow = "hidden";
          document.body.style.paddingRight = `${scroll}px`;

          btnPresset = true;

          if (destroy) {
            item.style.display = "none";
          }
        }
      });
    });

    close.forEach((item) => {
      item.addEventListener("click", (e) => {
        closeAllModalWindow();
        document.body.style.overflow = "";
        document.body.style.paddingRight = `0px`;
      });
    });

    // close.addEventListener("click", () => {
    //   closeAllModalWindow();
    //   document.body.style.overflow = "";
    //   document.body.style.paddingRight = `0px`;
    // });

    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        closeAllModalWindow();
        document.body.style.overflow = "";
        document.body.style.paddingRight = `0px`;
      }
    });
  }

  function showModalByTime(selector, time) {
    setTimeout(function () {
      let display;
      closeAllModalWindow();

      document
        .querySelectorAll("[data-modal]")
        .forEach((item) => {
          if (getComputedStyle(item).display !== "none") {
            display = "block";
          }
        });

      if (!display) {
        document.querySelector(selector).style.display =
          "block";
        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = `${scroll}px`;
      }
    }, time);
  }

  function openByScroll(selector) {
    window.addEventListener("scroll", () => {
      if (
        !btnPresset &&
        window.pageYOffset +
          document.documentElement.clientHeight >=
          document.documentElement.scrollHeight
      ) {
        document.querySelector(selector).click();
      }
    });
  }

  bindModal(
    ".button-design",
    ".popup-design",
    ".popup-close"
  );
  bindModal(
    ".button-consultation",
    ".popup-consultation",
    ".popup-close"
  );
  bindModal(
    ".fixed-gift",
    ".popup-gift",
    ".popup-close",
    true
  );
  openByScroll(".fixed-gift");

  showModalByTime(".popup-consultation", 60000);
};

export default modals;
