import { Parallax } from 'react-parallax';
import { motion } from "framer-motion";

const ApartmentBanner = () => {
    return (
        <div className='mb-8 md:mb-16'>
            <Parallax
                blur={{ min: -15, max: 15 }}
                bgImage={"https://cozystay.loftocean.com/apartment/wp-content/uploads/sites/6/2023/03/img-35.jpg"}
                bgImageAlt="the dog"
                strength={-200}
            >
                <div className="hero h-[300px] md:h-[400px] lg:h-[700px]">
                    <div className="hero-overlay bg-opacity-40"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="p-4 md:p-8 lg:px-72 lg:py-24">
                            <motion.div initial={{ y: -150 }} animate={{ y: 0 }} transition={{ duration: "2", delay: "0" }} className='space-y-2 md:space-y-5'>
                                <h1 className='text-4xl md:text-5xl lg:text-7xl text-white'>Book Your Stay</h1>
                                <p className='text-sm md:text-base font-semibold text-center'>A stay infused with creativity and culture.</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </Parallax>
        </div>
    );
};

export default ApartmentBanner;