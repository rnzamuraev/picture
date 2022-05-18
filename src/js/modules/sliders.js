const sliders = (slides, next, prev, direction) => {
  // direction - направление(горизонтальное или вертикальное)
  const items = document.querySelectorAll(slides);

  let slideIndex = 1,
    paused;

  function showSlides(n) {
    if (n > items.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = items.length;
    }

    items.forEach((item) => {
      item.style.display = "none";
      item.classList.add("animated");
    });

    items[slideIndex - 1].style.display = "block";
  }
  showSlides(slideIndex);

  function plusSlide(n) {
    showSlides((slideIndex += n));
  }

  try {
    const nextBtn = document.querySelector(next),
      prevBtn = document.querySelector(prev);

    nextBtn.addEventListener("click", () => {
      plusSlide(1);
      items[slideIndex - 1].classList.remove(
        "slideInRight"
      );
      items[slideIndex - 1].classList.add("slideInLeft");
    });

    prevBtn.addEventListener("click", () => {
      plusSlide(-1);
      items[slideIndex - 1].classList.remove("slideInLeft");
      items[slideIndex - 1].classList.add("slideInRight");
    });
  } catch (e) {}

  function activateAnimation() {
    if (direction === "vertical") {
      paused = setInterval(function () {
        plusSlide(1);
        items[slideIndex - 1].classList.add("slideInDown");
      }, 5000);
    } else {
      paused = setInterval(function () {
        plusSlide(1);
        items[slideIndex - 1].classList.remove(
          "slideInRight"
        );
        items[slideIndex - 1].classList.add("slideInLeft");
      }, 5000);
    }
  }
  activateAnimation();

  items[0].parentNode.addEventListener("mouseenter", () => {
    clearInterval(paused);
  });
  items[0].parentNode.addEventListener("mouseleave", () => {
    activateAnimation();
  });
};

export default sliders;
