import './sass/main.scss';
import netteForms from 'nette-forms';
import 'bootstrap';

import Swiper, { Navigation, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.mySwiper', {
    modules: [Navigation, Pagination],
    cssMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});

const refSwiper = new Swiper('.ref-swiper', {
    modules: [ Navigation, Pagination ],
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper.button-prev"
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
})

window.Nette = netteForms;
netteForms.initOnLoad();