// import checkNumInputs from "./checkNumInputs";

const forms = () => {
  const forms = document.querySelectorAll("form"),
    inputs = document.querySelectorAll("input"),
    textarea = document.querySelectorAll("textarea"),
    uploads = document.querySelectorAll("[name='upload']");

  // checkNumInputs("input[name='user_phone']");

  const message = {
    loading: "Загрузка...",
    success: "Спасибо! с Вами скоро свяжутся",
    failure: "Что-то пошло не так...",
    spinner: "./assets/img/spinner.gif",
    ok: "./assets/img/ok.png",
    fail: "./assets/img/fail.png",
  };

  const path = {
    designer: "./assets/server.php",
    question: "./assets/question.php",
  };

  async function postData(url, data) {
    let res = await fetch(`${url}`, {
      method: "POST",
      body: data,
    });

    if (!res.ok) {
      throw new Error(
        `Could not fetch ${url}, status: ${res.status}`
      );
    }

    return await res.text();
  }

  const clearInputs = () => {
    inputs.forEach((item) => {
      item.value = "";
    });
    textarea.forEach((item) => {
      item.value = "";
    });
    uploads.forEach((upload) => {
      upload.previousElementSibling.textContent =
        "Фаил не выбран";
    });
  };

  uploads.forEach((upload) => {
    upload.addEventListener("input", () => {
      console.log(upload.files[0]);
      let dots;
      const arr = upload.files[0].name.split(".");
      arr[0].lenght > 5 ? (dots = "...") : (dots = ".");
      const name = arr[0].substring(0, 5) + dots + arr[1];
      upload.previousElementSibling.textContent = name;
      console.log(name);
      console.log(upload);
    });
  });

  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      if (event.target) {
        event.preventDefault();
      }

      let statusMessage = document.createElement("div");
      statusMessage.classList.add("status");
      form.parentNode.appendChild(statusMessage);
      form.classList.add("animated", "fadeOutUp");
      setTimeout(function () {
        form.style.display = "none";
      }, 500);

      let statusImg = document.createElement("img");
      statusImg.setAttribute("src", message.spinner);
      statusImg.classList.add("animated", "fadeInUp");
      statusMessage.appendChild(statusImg);

      let textMessage = document.createElement("div");
      textMessage.textContent = message.loading;
      statusMessage.appendChild(textMessage);

      const formData = new FormData(form);
      let api;
      form.closest(".popup-design") ||
      form.classList.contains("calc_form")
        ? (api = path.designer)
        : (api = path.question);
      console.log(api);

      postData(api, formData)
        .then((res) => {
          console.log(res);
          statusImg.setAttribute("src", message.ok);
          textMessage.textContent = message.success;
        })
        .catch((err) => {
          console.log(err);
          statusImg.setAttribute("src", message.fail);
          textMessage.textContent = message.failure;
        })
        .finally(() => {
          clearInputs();

          setTimeout(() => {
            statusMessage.remove();
            form.style.display = "block";
            form.classList.remove("fadeOutUp");
            form.classList.add("fadeInUp");
          }, 5000);
        });
    });
  });
};

export default forms;
