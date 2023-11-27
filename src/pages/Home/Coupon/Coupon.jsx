import Loading from "../../../Loading/Loading";
import useCoupon from "../../../hooks/useCoupon";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import Heading from "../../../components/Heading/Heading";

const Coupon = () => {

    const [coupons, isPending] = useCoupon();

    if (isPending) {
        return <Loading />
    }

    console.log(coupons);

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
                        <div style={{ borderRadius: "0 200px 0px 200px" }} className="text-center border rounded-xl py-6 bg-[#b92c34] text-white">
                            <div className="md:mx-6 space-y-3 p-3">
                                <h1 className="md:text-lg font-medium">{coupon?.code}</h1>
                                <h2 className="text-xl md:text-3xl font-bold">SAVE {coupon?.discount} %</h2>
                                <p className="text-[#c7696a] md:text-lg">{coupon?.description}</p>
                            </div>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Coupon;