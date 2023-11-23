import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Banner = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className="h-[280px] md:h-[520px] lg:h-[700px] w-full" src="https://s7d1.scene7.com/is/image/marriotts7prod/bkksi-exterior-0386:Classic-Hor?wid=2880&fit=constrain" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="lg:h-[700px] w-full" src="https://cache.marriott.com/content/dam/marriott-renditions/BKKSI/bkksi-pool-0387-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=2880px:*" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="lg:h-[700px] w-full" src="https://cache.marriott.com/content/dam/marriott-renditions/BKKSI/bkksi-club-5937-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=2880px:*" alt="" />
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;