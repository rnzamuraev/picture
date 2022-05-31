const drop = (inputSelector) => {
  // drag *
  // dragend *
  // dragenter - Обьект над dropArea
  // dragexit *
  // dragleave - Обьект за пределами dropArea
  // dragover - Обьект зависает над dropArea
  // dragstart *
  // drop - Обьект отправлен в dropArea

  const inputsFiles =
    document.querySelectorAll(inputSelector);

  ["dragenter", "dragleave", "dragover", "drop"].forEach(
    (nameEvent) => {
      inputsFiles.forEach((input) => {
        input.addEventListener(
          nameEvent,
          preventDefaults,
          false
        );
      });
    }
  );

  function preventDefaults(e) {
    e.preventDefaults();
    e.stopPropagation();
  }

  function highlight(item) {
    item.closest(".file_upload").style.border = "5px";
    item.closest(".file_upload").style.backgroundColor =
      "rgba(0, 0, 0, 0.7)";
  }

  function unhighlight(item) {
    item.closest(".file_upload").style.border = "";
    // item.closest(".file_upload").style.backgroundColor =
    //   "#ededed";

    if (item.closest(".calc_form")) {
      item.closest(".file_upload").style.backgroundColor =
        "#fff";
    } else if (item.closest(".popup-form")) {
      item.closest(".file_upload").style.backgroundColor =
        "#ededed";
    } else {
      item.closest(".file_upload").style.backgroundColor =
        "#f7e7e6";
    }
  }

  ["dragenter", "dragover"].forEach((nameEvent) => {
    inputsFiles.forEach((input) => {
      input.addEventListener(
        nameEvent,
        () => highlight(input),
        false
      );
    });
  });

  ["dragleave", "drop"].forEach((nameEvent) => {
    inputsFiles.forEach((input) => {
      input.addEventListener(
        nameEvent,
        () => unhighlight(input),
        false
      );
    });
  });

  inputsFiles.forEach((input) => {
    input.addEventListener("drop", (e) => {
      input.files = e.dataTransfer.files;

      let dots;
      const arr = input.files[0].name.split(".");

      arr[0].lenght > 5 ? (dots = "...") : (dots = ".");
      const name = arr[0].substring(0, 5) + dots + arr[1];
      input.previousElementSibling.textContent = name;
    });
  });
};

export default drop;
