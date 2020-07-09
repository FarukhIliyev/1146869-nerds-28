var link = document.querySelector(".map-contact-button");
var popup = document.querySelector(".modal-login");
var modalclose = document.querySelector(".modal-close");
var modalform = document.querySelector(".modal-form");
var modallogin = document.querySelector(".modal-input-login");
var modalemail = document.querySelector(".modal-input-email");
var isStorageSupport = true;
var storage = "";
try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}
link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  if (storage) {
    modallogin.value = storage;
    modalemail.focus();
  } else {
    modallogin.focus();
  }
});
modalclose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});
modalform.addEventListener("submit", function (evt) {
  if (!modallogin.value || !modalemail.value) {
    evt.preventDefault();
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", modallogin.value);
    }
  }
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});
