$(document).ready(function () {
  var button = $("#button");
  var modal = $("#modal");
  var close = $("#close");

  button.on("click", function() {
    modal.addClass("modal_active");
  });

  close.on("click", function() {
    modal.removeClass("modal_active")
  });
});

$(function() {
  $(window).scroll(function () {
    if ($(this).scrollTop() != 0) $("#top").fadeIn();
    else $("#top").fadeOut();
  });
  $("#top").click(function () {
    $("body,html").animate({scrollTop: 0}, 800);
  });
  
});