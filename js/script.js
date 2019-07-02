var block=document.querySelector(".title-btn");
var popup=document.querySelector(".hide-form");
var form=popup.querySelector(".hotel-search");
var arrival=popup.querySelector("[name=arrival-date]");
var departure=popup.querySelector("[name=departure-date]");
var adult=popup.querySelector("[name=adult]");
var children=popup.querySelector("[name=children]");
var storage=localStorage.getItem("adult");
var number=localStorage.getItem("children");

block.addEventListener("click", function (evt) {
 popup.classList.toggle("visual");
 arrival.focus();
 if (storage && number) {
   adult.value=storage;
   children.value=number;
 }
});

form.addEventListener("submit", function (evt) {
  if (!arrival.value || !departure.value || !adult.value || !children.value) {
    evt.preventDefault();
    console.log("Необходимо ввести данные");
  } else {
    localStorage.setItem("adult", adult.value);
    localStorage.setItem("children",children.value);
  }
});
