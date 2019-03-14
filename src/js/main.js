// Анимация WOW
new WOW({
  mobile: false
}).init();

$(document).ready(function () {
  // настройка animate.css
  $(".offer__button").hover(function () {
    $(this).removeClass('animated');
  });
  // валидация вехней формы
  $("#offer-form").validate({
    rules: {
      username: {
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      phone: "required"
    },
    messages: {
      username: {
        required: "Заполните поле",
        minlength: jQuery.validator.format("Длина имени не меньше {0} символов"),
        maxlength: jQuery.validator.format("Длина имени не больше {0} символов")
      },
      phone: {
        required: "Заполните поле"
      }
    },
    errorClass: "invalid",
    errorElement: "div"
  });
  // Валидация нижней формы
  $("#brif-form").validate({
    rules: {
      username: {
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      phone: "required",
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      username: {
        required: "Заполните поле",
        minlength: jQuery.validator.format("Длина имени не меньше {0} символов"),
        maxlength: jQuery.validator.format("Длина имени не больше {0} символов")
      },
      phone: {
        required: "Заполните поле"
      },
      email: {
        required: "Заполните поле",
        email: jQuery.validator.format("Введите корректный email")
      }
    },
    errorClass: "invalid",
    errorElement: "div"
  });
  // Валидация телефона
  $(".phone").mask("8 (999) 999-999-99")
  // Слайдер
  $(".slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $(".arrows__left"),
    nextArrow: $(".arrows__right"),
    responsive: [{
        breakpoint: 1201,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 787,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

$(document).ready(function () {
  var button = $("#button");
  var modal = $("#modal");
  var close = $("#close");

  button.on("click", function () {
    modal.addClass("modal_active");
  });

  close.on("click", function () {
    modal.removeClass("modal_active")
  });
});

$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() != 0) $("#top").fadeIn();
    else $("#top").fadeOut();
  });
  $("#top").click(function () {
    $("body,html").animate({
      scrollTop: 0
    }, 800);
  });

});

$(document).ready(function () {

  var target = $('#map');
  var targetPos = target.offset().top;
  var winHeight = $(window).height();
  var scrollToMap = targetPos - winHeight;
  $(window).scroll(function () {
    var winScrollTop = $(this).scrollTop();
    if (winScrollTop > scrollToMap) {
      target.prepend('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A25062e30fe53366531a540c2acbd132b0e1789c4423cf5c13a83abfc01a5f51b&amp;width=100%25&amp;height=640&amp;lang=ru_RU&amp;scroll=false"></script>');
      $(window).off("scroll");
    }
  });
});