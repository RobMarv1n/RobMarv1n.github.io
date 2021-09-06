// ! HEADER SLIDER

const swiper = new Swiper('.popular-products__slider', {

    slidesPerView: 3,
    spaceBetween: 25,
    simulateTouch: false,
    // grabCursor: true,
    loop: true,
    
    // autoplay: 4000,
    // speed: 400,
    nextButton: '.popular-products__slider-button--button-next',
    prevButton: '.popular-products__slider-button--button-prev',
});

const swiper2 = new Swiper('.discount-products__slider', {

    slidesPerView: 3,
    spaceBetween: 25,
    simulateTouch: false,
    // grabCursor: true,
    loop: true,
    // autoplay: 4000,
    // speed: 400,
    nextButton: '.discount-products__slider-button--button-next',
    prevButton: '.discount-products__slider-button--button-prev',
});

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

