import { getResource } from "../services/requests";

// const showMoreStyles = (selectorBtn, wrapper) => {
const showMoreStyles = (selectorBtn, selectorCards) => {
  const btn = document.querySelector(selectorBtn),
    cards = document.querySelectorAll(selectorCards);

  cards.forEach((card) => {
    card.classList.add("animated", "fadeInUp");
  });

  btn.addEventListener("click", () => {
    cards.forEach((card) => {
      card.classList.remove(
        "hidden-lg",
        "hidden-md",
        "hidden-sm",
        "hidden-xs"
      );
      card.classList.add(
        "col-sm-3",
        "col-sm-offset-0",
        "col-xs-10",
        "col-xs-offset-1"
      );
    });

    btn.remove();
  });

  // btn.addEventListener("click", function () {
  //   getResource("http://localhost:3000/styles")
  //     .then(
  //       (res) => createCards(res)
  //       // (res) => console.log(res)
  //     )
  //     .catch((error) => console.log(error));

  //   this.remove();
  // });

  // function createCards(response) {
  //   response.forEach((item) => {
  //     let card = document.createElement("div");

  //     card.classList.add(
  //       "animated",
  //       "fadeInUp",
  //       "col-sm-3",
  //       "col-sm-offset-0",
  //       "col-xs-10",
  //       "col-xs-offset-1"
  //     );

  //     card.innerHTML = `
  //       <div class=styles-block>
  //         <img src=${item.src} alt>
  //         <h4>${item.title}</h4>
  //         <a href=${item.link}>Подробнее</a>
  //       </div>
  //     `;

  //     document.querySelector(wrapper).appendChild(card);
  //   });

  // response.forEach(({ src, title, link }) => {
  //   let card = document.createElement("div");

  //   card.classList.add(
  //     "animated",
  //     "fadeInUp",
  //     "col-sm-3",
  //     "col-sm-offset-0",
  //     "col-xs-10",
  //     "col-xs-offset-1"
  //   );

  //   card.innerHTML = `
  //     <div class=styles-block>
  //       <img src=${src} alt>
  //       <h4>${title}</h4>
  //       <a href=${link}>Подробнее</a>
  //     </div>
  //   `;

  //   document.querySelector(wrapper).appendChild(card);
  // });
  // }
};

export default showMoreStyles;
