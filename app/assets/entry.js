import './sass/main.scss';
import netteForms from 'nette-forms';
import 'bootstrap';



import Swiper, { Navigation, Pagination, Autoplay} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


const swiper = new Swiper('.mySwiper', {
    modules: [Navigation, Pagination, Autoplay],
    cssMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    autoplay: {
        delay: 4000,
    },
    loop: true,
    mousewheel: true,
    keyboard: true,
});

const refSwiper = new Swiper('.ref-swiper', {
    modules: [Pagination, Autoplay ],
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    autoplay: {
        delay: 4000,
    },
    loop: true,
    mousewheel: true,
    keyboard: true
})

window.Nette = netteForms;
netteForms.initOnLoad();