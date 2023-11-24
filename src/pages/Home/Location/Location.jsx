import Heading from "../../../components/Heading/Heading";
import { FiPhoneCall } from 'react-icons/fi';
import { SlLocationPin } from "react-icons/sl";
import { HiOutlineMail } from "react-icons/hi";

const Location = () => {
    return (
        <div>
            <Heading heading="location"></Heading>
            <div>
                <div style={{ width: '100%' }}>
                    <iframe
                        width="100%"
                        height="600"
                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%2038%20Gulshan%20Ave,%20Dhaka%201212+(THE%20GLASS%20HOUSE)&amp;t=p&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    >
                        <a href="https://www.maps.ie/population/">Find Population on Map</a>
                    </iframe>
                </div>
            </div>
            <div className="max-w-screen-2xl mx-auto">
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 text-center my-16 p-8 container mx-auto'>
                    <div className='bg-[#ABCE4E] p-20 rounded-lg space-y-4'>
                        <div className='bg-white p-3 rounded-full w-[40px] mx-auto'>
                            <FiPhoneCall></FiPhoneCall>
                        </div>
                        <h1 className='text-3xl text-white font-semibold'>Call Us</h1>
                        <p className='text-white font-poppins'>Phone : 01719991111</p>
                        <p className='font-poppins text-white'>Fax: +6221.2002.2013</p>
                    </div>
                    <div className='bg-[#F55D52] p-20 rounded-lg space-y-4'>
                        <div className='bg-white p-3 rounded-full w-[40px] mx-auto'>
                            <SlLocationPin></SlLocationPin>
                        </div>
                        <h1 className='text-3xl text-white font-semibold'>Location</h1>
                        <p className='text-white font-poppins'>38 Gulshan Ave, Dhaka 1212</p>
                        <p className='font-poppins text-white'>Dhaka - Bangladesh</p>
                    </div>
                    <div className='bg-[#5B9ACF] p-20 rounded-lg space-y-4'>
                        <div className='bg-white p-3 rounded-full w-[40px] mx-auto'>
                            <HiOutlineMail></HiOutlineMail>
                        </div>
                        <h1 className='text-3xl text-white font-semibold'>Email Us</h1>
                        <p className='text-white font-poppins'>shantaholdings@gmail.com</p>
                        <p className='font-poppins text-white'>theglasshouse@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Location;