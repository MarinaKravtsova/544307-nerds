  var button = document.querySelector(".button-write");
  var popup = document.querySelector(".modal-write");
  var close = document.querySelector(".modal-close");
  var form = popup.querySelector("form");
  var login = popup.querySelector("[name=name]");
  var mail = popup.querySelector("[name=e-mail]");
  var text = popup.querySelector("textarea");
  var storage = localStorage.getItem("login");

 button.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    login.focus();
    if (storage) {
      login.value = storage;
      mail.focus();
   } else {
      login.focus();
   }
 });

 close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
 });

 form.addEventListener("submit", function (evt) {
    if (!login.value || !mail.value || !text.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
 } else {
    localStorage.setItem("login", login.value);
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});
