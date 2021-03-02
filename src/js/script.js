$(document).ready(function(){
    $('.carousel').slick({
        infinite: true,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrows/arrowLeft.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrows/arrowRight.png"></button>',
        autoplay: false,
        // autoplaySpeed: 2500,
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
});

  $(window).scroll(function() {
    if ($(this).scrollTop() > 1500) {
      $('#scroll').addClass('scrollUp_flex').removeClass('scrollUp');
    } else {
      $('#scroll').addClass('scrollUp').removeClass('scrollUp_flex');
    }
  });

  // Slow scroll

  $("a[href^='#up']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
  });

//    //Modal

//    $('[data-modal=consultation]').on('click', function() {
//     $('.overlay, #consultation').fadeIn('slow');
//   });
  
//   $('[data-modal=confidentiality]').on('click', function() {
//     $('.overlay, #confidentiality').fadeIn('slow');
//   });

//   $('.modal__close').on('click', function() {
//     $('.overlay, #consultation, #thanks, #confidentiality').fadeOut('slow');
//   });

//    //Validate

//      // Валидация телефона jQuery
//   //  jQuery.validator.addMethod('phonenu', function (value, element) {
//   //   return this.optional(element) || /^\d{3}-?\d{3}-?\d{4}$/.test(value) || /^\d{3}?\d{3}?\d{4}$/.test(value);
//   //   }, 'Введите номер в формате<br> 999-888-66-55 или 9998886655');

//    function validate(form) {
//     $(form).validate({
//       rules: {
//         name: {
//           required: true,
//           minlength: 2
//         },
//         phone: "required",
//         email: {
//           required: true,
//           email: true
//         },
//         message: {
//           required: true,
//           minlength: 20
//         }
//       },
//       messages: {
//         name: {
//           required: "Пожалуйста, введите своё имя",
//           minlength: jQuery.validator.format("Введите не менее {0} символов!")
//         },
//         phone: {
//           required: "Пожалуйста, введите свой номер<br> телефона!"
//         },
//         email: {
//           required: "Пожалуйста, введите свою почту!",
//           email: "Введите почтовый адрес почты<br> в формате name@mail.ru"
//         },
//         message:  {
//           required: "Пожалуйста,введите сообщение",
//           minlength: jQuery.validator.format("Введите не менее {0} символов!")
//         }
//       }
//     });
//   };

//   validate('#consultation form');
//   validate('#questions form');
//   validate('#priceForm form');
  
//    //mask plagin

//   $("input[name=phone]").mask("+7 (999) 999-99-99");

//   $('form').submit(function(e) {
//     e.preventDefault();
//     let $form = $(this);
//     if(! $form.valid()) return false;
//     $.ajax({
//       type: "POST",
//       url: "mailer/smart.php",
//       data: $(this).serialize()
//     }).done(function() {
//       $(this).find("input").val("");
//       $('#consultation, #questions, #priceForm').validate();
//       $('#consultation').fadeOut();
//       $('.overlay, #thanks').fadeIn('slow');
//       $('form').trigger('reset');
//     });
//     return false;
//   });

// // Инициализация animation library

// new WOW().init();

//timer

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}
 
function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');
 
  function updateClock() {
    var t = getTimeRemaining(endtime);
 
    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
 
    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }
 
  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}
 
var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer
initializeClock('countdown', deadline);

var deadline = '2021-03-31';