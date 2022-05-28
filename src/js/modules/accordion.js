// const accordion = (btnsSelector, itemsSelector) => {
//   const btns = document.querySelectorAll(btnsSelector),
//     items = document.querySelectorAll(itemsSelector);

//   btns.forEach((btn) => {
//     btn.addEventListener("click", function () {
//       if (!this.classList.contains("active")) {
//         btns.forEach((btn) => {
//           btn.classList.remove("active", "active-style");
//         });

//         this.classList.add("active", "active-style");
//       } else {
//         this.classList.remove("active", "active-style");
//       }
//     });
//   });

//   items.forEach((item) => {
//     item.classList.add("animated", "fadeInDown");
//   });
// };

const accordion = (btnsSelector) => {
  const btns = document.querySelectorAll(btnsSelector);

  btns.forEach((btn) => {
    btn.addEventListener("click", function () {
      if (!this.classList.contains("active-style")) {
        btns.forEach((btn) => {
          btn.classList.remove("active-style");
          btn.nextElementSibling.classList.remove(
            "active-content"
          );
          btn.nextElementSibling.style.maxHeight = "0px";
        });

        this.classList.add("active-style");
        this.nextElementSibling.classList.add(
          "active-content"
        );

        this.nextElementSibling.style.maxHeight =
          this.nextElementSibling.scrollHeight + 80 + "px";
      } else {
        this.classList.remove("active-style");
        this.nextElementSibling.classList.remove(
          "active-content"
        );

        this.nextElementSibling.style.maxHeight = "0px";
      }
    });
  });
};

export default accordion;
