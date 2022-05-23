const checkTextInputs = (selector) => {
  let inputs = document.querySelectorAll(selector);

  inputs.forEach((input) => {
    input.addEventListener("keypress", function (e) {
      if (e.key.match(/[^а-яё 0-9]/gi)) {
        console.log(e);
        e.preventDefault();
      }
    });
  });
};

export default checkTextInputs;
