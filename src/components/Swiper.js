import SwiperWrapper from "swiper";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import { Pagination, Autoplay,Navigation } from 'swiper/modules';

class Swiper {
    runSwiper() {
      const swiper = new SwiperWrapper('.swiper', {
        modules: [Pagination, Autoplay, Navigation],
        direction: 'horizontal',
        loop: true,
        centeredSlides: true,
        // autoplay: {
        //   delay: 7000,
        //   disableOnInteraction: false,
        // },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
      });
    }
}

export default Swiper;