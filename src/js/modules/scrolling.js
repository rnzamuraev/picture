const scrolling = (upSelector) => {
  const arrowUp = document.querySelector(upSelector),
    element = document.documentElement,
    body = document.body;

  window.addEventListener("scroll", () => {
    if (element.scrollTop > 1250) {
      arrowUp.classList.add("animated", "fadeIn");
      arrowUp.classList.remove("fadeOut");
    } else {
      arrowUp.classList.add("fadeOut");
      arrowUp.classList.remove("fadeIn");
    }
  });

  ///////// Scrolling with requestAnimationFrame
  let links = document.querySelectorAll("[href^='#']"),
    speed = 0.2;

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      let widthTop = element.scrollTop,
        hash = this.hash,
        toBlock,
        start = null;

      if (this.hash) {
        toBlock = document
          .querySelector(hash)
          .getBoundingClientRect().top;
      }

      requestAnimationFrame(step);

      function step(time) {
        if (start === null) {
          start = time;
        }

        let progress = time - start,
          r =
            toBlock < 0
              ? Math.max(
                  widthTop - progress / speed,
                  widthTop + toBlock
                )
              : Math.min(
                  widthTop + progress / speed,
                  widthTop + toBlock
                );
        element.scrollTo(0, r);

        if (r != widthTop + toBlock) {
          requestAnimationFrame(step);
        } else {
          location.hash = hash;
        }
      }
    });
  });

  /////////  Pure js scrolling
  // const calcScroll = () => {
  //   arrowUp.addEventListener("click", function (event) {
  //     let scrollTop = Math.round(
  //       body.scrollTop || element.scrollTop
  //     );

  //     if (this.hash !== "") {
  //       event.preventDefault();
  //       // let hashElement = document.getElementById(
  //       //   this.hash.substring(1)
  //       // );
  //       ///////////   ИЛИ
  //       let hashElement = document.querySelector(this.hash),
  //         hashElementTop = 0;

  //       while (hashElement.offsetParent) {
  //         hashElementTop += hashElement.offsetTop;
  //         hashElement = hashElement.offsetParent;
  //       }
  //       hashElementTop = Math.round(hashElementTop);
  //       smoothScroll(scrollTop, hashElementTop, this.hash);
  //     }
  //   });
  // };

  // const smoothScroll = (from, to, hash) => {
  //   let timeInterval = 1,
  //     prevScrollTop,
  //     speed;

  //   if (to > from) {
  //     speed = 30;
  //   } else {
  //     speed = -30;
  //   }

  //   let move = setInterval(function () {
  //     let scrollTop = Math.round(
  //       body.scrollTop || element.scrollTop
  //     );

  //     if (
  //       prevScrollTop === scrollTop ||
  //       (to > from && scrollTop >= to) ||
  //       (to < from && scrollTop <= to)
  //     ) {
  //       clearInterval(move);
  //       history.replaceState(
  //         history.state,
  //         document.title,
  //         location.href.replace(/#.*$/g, "") + hash
  //       );
  //     } else {
  //       body.scrollTop += speed;
  //       element.scrollTop += speed;
  //       prevScrollTop = scrollTop;
  //     }
  //   }, timeInterval);
  // };

  // calcScroll();
};

export default scrolling;
