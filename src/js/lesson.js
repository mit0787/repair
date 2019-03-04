var button = document.querySelector("#button")
var modal = document.querySelector("#modal")
var close = document.querySelector("#close")
var myVar

button.addEventListener("click", function() {
  modal.classList.add("modal_active");
  myVar = setTimeout(function(){ modal.classList.remove("modal_active"); }, 5000);
  return myVar;
});


close.addEventListener("click", function() {
  modal.classList.remove("modal_active");
  clearTimeout(myVar);
});

