import modals from "./modules/modals";
import sliders from "./modules/sliders";
import forms from "./modules/forms";
import mask from "./modules/mask";

window.addEventListener("DOMContentLoaded", () => {
  modals();
  sliders(
    ".feedback-slider-item",
    ".main-next-btn",
    ".main-prev-btn",
    ""
  );
  sliders(".main-slider-item", "", "", "vertical");
  forms();
  mask();
});
