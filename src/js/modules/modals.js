import closeAllModalWindow from "./closeAllModalWindow.js";
import calcScroll from "./calcScroll.js";

const modals = () => {
  const scroll = calcScroll();

  function bindModal(
    openSelector,
    modalSelector,
    closeSelector,
    modalClose = true
  ) {
    const open = document.querySelectorAll(openSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelectorAll(closeSelector);
    // close = document.querySelector(closeSelector);
    // const prise = document.querySelectorAll(".fixed-gift");
    // console.log(prise);

    open.forEach((item) => {
      item.addEventListener("click", (event) => {
        if (event.target) {
          event.preventDefault();
          closeAllModalWindow();
          modal.style.display = "block";
          document.body.style.overflow = "hidden";
          document.body.style.paddingRight = `${scroll}px`;
        }
      });
    });

    close.forEach((item) => {
      item.addEventListener("click", (e) => {
        closeAllModalWindow();
        document.body.style.overflow = "";
        document.body.style.paddingRight = `0px`;
        // if (e.target && e.target.item === ".fixed-gift") {
        //   const prise = (document.querySelector(
        //     ".fixed-gift"
        //   ).style.display = "none");
        // }
      });
    });

    // close.addEventListener("click", () => {
    //   closeAllModalWindow();
    //   document.body.style.overflow = "";
    //   document.body.style.paddingRight = `0px`;
    // });

    modal.addEventListener("click", (event) => {
      if (event.target === modal && modalClose == true) {
        closeAllModalWindow();
        document.body.style.overflow = "";
        document.body.style.paddingRight = `0px`;
      }
    });
  }

  function showModalByTime(selector, time) {
    setTimeout(function () {
      let display;

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
      // document.querySelector(selector).style.display =
      //   "block";
      // document.body.style.overflow = "hidden";
      // document.body.style.paddingRight = `${scroll}px`;
    }, time);
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
  bindModal(".fixed-gift", ".popup-gift", ".popup-close");

  showModalByTime(".popup-consultation", 6000);
};

export default modals;
