import Loading from "../../../Loading/Loading";
import useCoupon from "../../../hooks/useCoupon";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { motion } from "framer-motion";
import { Paper, Typography } from '@mui/material';

import { Pagination } from 'swiper/modules';
import Heading from "../../../components/Heading/Heading";

const Coupon = () => {

    const [coupons, isPending] = useCoupon();

    if (isPending) {
        return <Loading />
    }

    return (
        <div className="max-w-screen-2xl mx-auto my-10">
            <Heading heading="All Coupons"></Heading>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    coupons?.map(coupon => <SwiperSlide key={coupon?._id}>
                        <motion.div
                            initial={{ y: -150, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 2, delay: 1 }}
                        >
                            <Paper
                                style={{
                                    borderRadius: '0 200px 0px 200px',
                                    padding: '20px',
                                    backgroundColor: '#b92c34',
                                    color: 'white',
                                }}
                            >
                                <div style={{paddingBottom: '20px', textAlign : "center"}}>
                                    <Typography variant="subtitle1" fontWeight="medium">
                                        {coupon?.code}
                                    </Typography>
                                    <Typography variant="h5" fontWeight="bold">
                                        SAVE {coupon?.discount} %
                                    </Typography>
                                    <Typography variant="body1" color="#c7696a">
                                        {coupon?.description}
                                    </Typography>
                                </div>
                            </Paper>
                        </motion.div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Coupon;