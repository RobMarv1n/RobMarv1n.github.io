// ! MAIN HEADER SEARCH

jQuery(function () {
    var availableTags = [
      "Мне скулы от досады сводит",
      "Мне ни к чему одические рати",
      "Дай, джим, на счастье лапу мне",
      "Бытует мнение, что счастье это дар",
      "Особое мнение"
    ];

jQuery(".main-header__search-input").autocomplete({
        source: availableTags,
        position: { my : "center top", at: "center bottom" },

    }).data("ui-autocomplete")._renderItem = function( ul, item ) {
        let txt = String(item.value).replace(new RegExp(this.term, "gi"), "<span class='highlight'>$&</span>");
        return jQuery("<li></li>")
            .data("ui-autocomplete-item", item)
            .append("<a>" + txt + "</a>")
            .appendTo(ul);
        };

});

//	!ANCHOR HEADER NAV

jQuery(document).ready( function () {
  
    jQuery("a.scroll-to").on("click", function(e){
          e.preventDefault();
          var anchor = $(this).attr('href');
          jQuery('html, body').stop().animate({
              scrollTop: $(anchor).offset().top
          }, 800);
      });
    
  });

// ! MAIN PAGE PRODUCTS SLIDERS

const swiper = new Swiper('.popular-products__slider', {

    slidesPerView: 3,
    spaceBetween: 25,
    simulateTouch: false,
    loop: true,
    nextButton: '.popular-products__slider-button--button-next',
    prevButton: '.popular-products__slider-button--button-prev',

});

const swiper2 = new Swiper('.discount-products__slider', {

    slidesPerView: 3,
    spaceBetween: 25,
    simulateTouch: false,
    loop: true,
    nextButton: '.discount-products__slider-button--button-next',
    prevButton: '.discount-products__slider-button--button-prev',

});

// !CATALOG SLIDERS

jQuery(document).ready(function(){
    const catalogSlider = new Swiper('.products__slider', {
        spaceBetween: 25,
        simulateTouch: false,
        slidesPerView: 3,
        slidesPerGroup: 3,
        slidesPerColumnFill: 'row',
        speed: 0,

        grid: {
            rows: 4, 
            fill: 'row',
        },

        pagination: {
            el: '.products__slider-pagination',
            clickable: true,
            renderBullet: function (index, className) {
              return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },
        
    });
});

// ! LOAD PAGES

// jQuery(document).ready(function($){
//     jQuery(document).on('click', '.calculator__link', function(event){
//         event.preventDefault();
//         var linkCat = jQuery(this).attr('href');
//         jQuery.ajax({
//         type: 'post',
//         url: url, 
//         data: {
//         action: 'my_aj',
//         'id':linkCat,
//         },
//         success: function(linkCat){
//         $('.products').load(linkCat); 
//         },
//         })
//         });
//     });

// jQuery(document).ready(function() {
//     jQuery(document).on('click', '.calculator__link', function(event) {
//         event.preventDefault();
//         jQuery('.products').empty().load('calculator.html');
//     });
// });

//   ! CONTACTS REQUIRED FORM

jQuery('document').ready(function() {
    jQuery('.contacts__button').on('click', function() {
        jQuery('input[required]').addClass('required');
        jQuery('textarea[required]').addClass('required');
    });
  });

// ! CONTACTS MAP

// function myMap() {
//     var mapOptions = {
//         center: new google.maps.LatLng(51.5, -0.12),
//         zoom: 10,
//         mapTypeId: google.maps.MapTypeId.HYBRID
//     }
// var map = new google.maps.Map(document.getElementById("map"), mapOptions);
// }

// ! CALCULATOR

jQuery('document').ready(function() {

    

    jQuery(".calculator__form").on("change", '.calculator__input', function() {

        let value = jQuery('#volume').val();
        let percentageUp = jQuery('#percentage-up-to').val();
        let percentageAfter = jQuery('#percentage-after').val();

        if (percentageUp < percentageAfter) {
            jQuery('.calculator__help').html("Процент до разведения должен быть больше процента после");
        }

        else if (allFilled()) {
            
            let answer = ((100 * percentageUp * (value * 1000 / 100)) / percentageAfter - 100 * (value * 1000 / 100))/1000;
    
            jQuery('.calculator__help').html("Для получения <span>" + percentageAfter + "%</span> после разбавления, нужно добавить <span>" + answer + " литров воды.</span>");
            jQuery('.calculator__img').addClass('decided') 
        }
        
        function allFilled() {
            var filled = true;
            jQuery('#volume, #percentage-up-to, #percentage-after').each(function() {
                if(jQuery(this).val() == '') filled = false;
            });
            return filled;
        }

    });


});
