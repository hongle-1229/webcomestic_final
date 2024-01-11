const inputList = document.querySelectorAll(".input-box input");
const changeBtn = document.querySelector(".change-profie.buton-my-account");

changeBtn.addEventListener("click", function () {
  inputList.forEach(function (input) {
    if (input.hasAttribute("disabled")) {
      input.removeAttribute("disabled");
      changeBtn.innerHTML = "Lưu thông tin";
    } else {
      input.setAttribute("disabled", "true");
      changeBtn.innerHTML = "Thay đổi thông tin";
    }
  });
});
