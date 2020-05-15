// Подменю
var submenu = document.getElementById('js-submenu');
var submenuList = document.getElementById('js-submenu-list');
submenu.onclick = function(evt) {
    evt.preventDefault();
    submenuList.classList.toggle('show');
    submenu.classList.toggle('submenu--open');
};

// Бургер
var burger = document.getElementById('js-burger');
var burgerWrapper = document.getElementById('js-burger-wrapper');
var trigram = burger.textContent;
burger.onclick = function(evt) {
    evt.preventDefault();
    burgerWrapper.classList.toggle('burger-wrapper--open');

    if (burger.textContent != '×') {
        burger.textContent = '×';
    } else {
        burger.textContent = trigram;
    }
};

// Слайдер
if (window.innerWidth >= 1400) {
    var links = document.querySelectorAll('.slider__label');
    var content = document.querySelectorAll('.slider__list--half');
    var selected = document.querySelector('.slider__label.slider__label--selected');
    for (var i = 0; i < links.length; i++) {
        (function(i) {
            var link = links[i];
            link.onclick = function() {
                selected.classList.remove('slider__label--selected');
                link.classList.add('slider__label--selected');
                selected = document.querySelector('.slider__label.slider__label--selected');
                for (var j = 0; j < content.length; j++) {
                    var opacity = window.getComputedStyle(content[j]).opacity;
                    if (opacity == "1") {
                        content[j].style.opacity = "0";
                    }
                }
                content[i].style.opacity = "1";
            }
        })(i);
    }
} else {
    // Слайдер адаптив
    var links = document.querySelectorAll('.slider__label--mobile');
    var content = document.querySelectorAll('.slider__list--half .slider__item');
    var selected = document.querySelector('.slider__label--mobile.slider__label--selected');
    for (var i = 0; i < links.length; i++) {
        (function(i) {
            var link = links[i];
            link.onclick = function() {
                selected.classList.remove('slider__label--selected');
                link.classList.add('slider__label--selected');
                selected = document.querySelector('.slider__label--mobile.slider__label--selected');
                for (var j = 0; j < content.length; j++) {
                    var opacity = window.getComputedStyle(content[j]).opacity;
                    if (opacity == "1") {
                        content[j].style.opacity = "0";
                    }
                }
                content[i].style.opacity = "1";
            }
        })(i);
    }
}