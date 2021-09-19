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

jQuery(document).ready(function(){

    const popularProducts = new Swiper('.popular-products__slider', {

        loop: true,
        navigation: {
            nextEl: '.popular-products__slider-button--button-next',
            prevEl: '.popular-products__slider-button--button-prev',
          },

        breakpoints: {

            320: {
                slidesPerView: 1,
                spaceBetween: 25,
                simulateTouch: true,
                },

            768: {
                slidesPerView: 2,
                spaceBetween: 25,
                simulateTouch: true,
            },

            1100: {
                slidesPerView: 3,
                spaceBetween: 25,
                simulateTouch: false,
            },
            
        },

    });

});

const swiper2 = new Swiper('.discount-products__slider', {
    slidesPerView: 3,
    spaceBetween: 25,
    simulateTouch: false,
    loop: true,
    navigation: {
        nextEl: '.discount-products__slider-button--button-next',
        prevEl: '.discount-products__slider-button--button-prev',
      },

    breakpoints: {

        320: {
            slidesPerView: 1,
            spaceBetween: 25,
            simulateTouch: true,
            },

        768: {
            slidesPerView: 2,
            spaceBetween: 25,
            simulateTouch: true,
        },

        1100: {
            slidesPerView: 3,
            spaceBetween: 25,
            simulateTouch: false,
        },
        
    },

});

// ! CATALOG MAIN SLIDERS

jQuery(document).ready(function(){
    const catalogSlider = new Swiper('.products__slider', {
        speed: 0,
        slidesPerColumnFill: 'row',

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

        breakpoints: {

            320: {
                slidesPerView: 1,
                spaceBetween: 25,
                simulateTouch: true,
                },

            768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 25,
                simulateTouch: true,
            },

            1100: {
                spaceBetween: 25,
                simulateTouch: false,
                slidesPerView: 3,
                slidesPerGroup: 3,
                
            },
            
        },
        
    });
});

// ! CATALOG PHONE NAV

jQuery(document).ready(function(){

    let catalogModalNav = jQuery('.navigation').find('.navigation__list');
    let openButton = jQuery('.navigation').find('.navigation-modal__open-button');
    let closeButton = jQuery('.navigation').find('.navigation-modal__close-button');
    let breadcrumbs = jQuery('.catalog').find('.catalog__breadcrumbs');
    jQuery(closeButton).hide();
    
    jQuery('.navigation').on( "click" , '.navigation-modal__open-button' , function(event) {

    event.preventDefault();
    jQuery(openButton).hide(200);
    jQuery(breadcrumbs).hide();
    catalogModalNav.show(100);
    jQuery(closeButton).show(200);
    
    
    });  

    jQuery('.navigation').on( "click" , '.navigation-modal__close-button' , function(event) {

        event.preventDefault();
        jQuery(closeButton).hide(200);
        catalogModalNav.hide(100);
        jQuery(openButton).show(200);
        jQuery(breadcrumbs).show();

    }); 

}); 

// ! CATALOG CARD SLIDER

var thumbnailSlider = new Swiper(".card__thumbnails-slide", {
    slidesPerView: 3,
    spaceBetween: 15,
    freeMode: true,
    watchSlidesProgress: true,
});

  var cardSlider = new Swiper(".card__main-img", {
    thumbs: {
      swiper: thumbnailSlider,
    },
});

// ! CATALOG RECENTLY-VIEWED SLIDER

jQuery(document).ready(function(){
    const recentlyView = new Swiper('.recently-viewed__slider', {
        slidesPerView: 3,
        spaceBetween: 20,
        simulateTouch: false,
        loop: true,

        navigation: {
            nextEl: '.recently-viewed__slider-button--button-next',
            prevEl: '.recently-viewed__slider-button--button-prev',
          },

        breakpoints: {

            320: {
                slidesPerView: 1,
                spaceBetween: 25,
                simulateTouch: true,
                },

            768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 25,
                simulateTouch: true,
            },

            1100: {
                spaceBetween: 25,
                simulateTouch: false,
                slidesPerView: 3,
                slidesPerGroup: 3,
                
            },
            
        },

    });
});

// ! CATALOG PRODUCT MODAL

jQuery(document).ready(function(){
    const modalSlider = new Swiper('.products__modal-slider', {
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: '.products__modal-slider-button--button-next',
            prevEl: '.products__modal-slider-button--button-prev',
          }
    });
});

let opacityWrapper = document.querySelector('.opacity-wrapper');
let modal2 = jQuery('.products').find('.products__modal');

jQuery('.card__main-img').on( "click" , '.swiper-slide-active' , function(event) {
  event.preventDefault();
  modal2.removeClass('visually-hidden');
  jQuery(opacityWrapper).toggleClass('visually-hidden');
  jQuery(opacityWrapper).toggleClass('opacity-wrapper--open');
});  

jQuery(document).on( "click" , '.products__modal-close-button' , function(event) {
    event.preventDefault();
    let target = event.target.closest('button');
    if (!target) return;
    modal2.addClass('visually-hidden');
    jQuery(opacityWrapper).addClass('visually-hidden');
    jQuery(opacityWrapper).removeClass('opacity-wrapper--open');

  });  

//   ! CONTACTS REQUIRED FORM

jQuery('document').ready(function() {
    jQuery('.contacts__button').on('click', function() {
        jQuery('input[required]').addClass('required');
        jQuery('textarea[required]').addClass('required');
    });
  });

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

            if (answer.toString().length > 3) {
                answer = answer.toFixed(3);
            };
            
            jQuery('.calculator__help').html("Для получения <span>" + percentageAfter + "%</span> после разбавления, нужно добавить <span>" + answer + " литров воды.</span>");
            jQuery('.calculator__img').addClass('decided'); 
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
