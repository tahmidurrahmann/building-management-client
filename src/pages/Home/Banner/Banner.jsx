import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { motion } from "framer-motion";

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
                    <img className="lg:h-[700px] w-full" src="https://i.ibb.co/1JHwdLf/300439610-396192432667947-2339421867163145607-n.jpg" alt="" />
                    <div className='absolute top-0 bg-gradient-to-r from-[#151515] to-[#15151500] w-full h-full text-white'>
                        <motion.div initial={{ y: -150 }} animate={{ y: 0 }} transition={{ duration: "2", delay: "0" }} className='absolute right-28 left-16 md:left-24 space-y-2 md:space-y-5 top-24 md:top-52 lg:top-72'>
                            <h1 className='text-xl md:text-3xl lg:text-5xl text-white'>THE GLASS HOUSE</h1>
                            <p className='text-xs'>Plot 2, Block SE(B), Gulshan Avenue, Gulshan</p>
                            <p className='text-sm md:text-base font-medium lg:w-1/3'>Here, Prestige has no Limits. The gem of Gulshan Avenue and the first commercial high rise steel structure of the country.</p>
                        </motion.div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="h-[280px] md:h-[520px] lg:h-[700px] w-full" src="https://i.ibb.co/hV3QZFC/14856003-1317953971550256-50431179339597801-o.jpg" alt="" />
                    <div className='absolute top-0 bg-gradient-to-r from-[#151515] to-[#15151500] w-full h-full text-white'>
                        <motion.div initial={{ y: 150 }} animate={{ y: 0 }} transition={{ duration: "5", delay: "2" }} className='absolute right-28 left-16 md:left-24 space-y-2 md:space-y-5 top-24 md:top-52 lg:top-72'>
                            <h1 className='text-xl md:text-3xl lg:text-5xl text-white'>THE GLASS HOUSE</h1>
                            <p className='text-xs'>Plot 2, Block SE(B), Gulshan Avenue, Gulshan</p>
                            <p className='text-sm md:text-base font-medium lg:w-1/3'>Elevate Living: Seamless Solutions with Building Management Excellence!</p>
                        </motion.div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="h-[280px] md:h-[520px] lg:h-[700px] w-full" src="https://i.ibb.co/T4P82Cq/14902697-1317957801549873-1791384665129624528-o.jpg" alt="" />
                    <div className='absolute top-0 bg-gradient-to-r from-[#151515] to-[#15151500] w-full h-full text-white'>
                        <motion.div initial={{ y: -150 }} animate={{ y: 0 }} transition={{ duration: "8", delay: "3" }} className='absolute right-28 left-16 md:left-24 space-y-2 md:space-y-5 top-24 md:top-52 lg:top-72'>
                            <h1 className='text-xl md:text-3xl lg:text-5xl text-white'>THE GLASS HOUSE</h1>
                            <p className='text-xs'>Plot 2, Block SE(B), Gulshan Avenue, Gulshan</p>
                            <p className='text-sm md:text-base font-medium lg:w-1/3'>Smart Spaces, Happy Places: Discover the Future of Building Management.</p>
                        </motion.div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="h-[280px] md:h-[520px] lg:h-[700px] w-full" src="https://i.ibb.co/TrwZZKt/277254-507206365958358-1704126417-o.jpg" alt="" />
                    <div className='absolute top-0 bg-gradient-to-r from-[#151515] to-[#15151500] w-full h-full text-white'>
                        <motion.div initial={{ y: 150 }} animate={{ y: 0 }} transition={{ duration: "10", delay: "4" }} className='absolute right-28 left-16 md:left-24 space-y-2 md:space-y-5 top-24 md:top-52 lg:top-72'>
                            <h1 className='text-xl md:text-3xl lg:text-5xl text-white'>THE GLASS HOUSE</h1>
                            <p className='text-xs'>Plot 2, Block SE(B), Gulshan Avenue, Gulshan</p>
                            <p className='text-sm md:text-base font-medium lg:w-1/3'>Efficiency Redefined: Your Building, Our Expertise, Perfect Harmony.</p>
                        </motion.div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;