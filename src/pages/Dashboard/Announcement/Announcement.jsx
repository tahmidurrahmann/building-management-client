import Loading from "../../../Loading/Loading";
import useAnnouncements from "../../../hooks/useAnnouncements";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';


const Announcement = () => {

    const [allAnnouncements, isPending] = useAnnouncements();

    if (isPending) {
        return <Loading></Loading>
    }

    console.log(allAnnouncements);

    return (

        <div className="max-w-screen-xl mx-auto">
            <h1 className="text-3xl font-bold text-center lg:text-left py-10">All Announcements</h1>
            <div className="flex justify-center items-center lg:my-6 px-6 lg:px-0">
                <Swiper
                    slidesPerView={2}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {
                        allAnnouncements?.map(announcement => <SwiperSlide key={announcement?._id}><blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                            <div className="flex items-center gap-4">
                                <p className="text-xl font-semibold">{announcement?.title}</p>
                            </div>
                            <p className="mt-4 text-neutral-400">
                                {announcement?.description}
                            </p>
                        </blockquote></SwiperSlide>)
                    }

                </Swiper>
            </div>
        </div>
    );
};

export default Announcement;