import Heading from "../../../components/Heading/Heading";
import { motion } from "framer-motion";

const AboutBuilding = () => {
    return (
        <div className="max-w-screen-2xl mx-auto my-10 md:my-20">
            <Heading heading="about the building"></Heading>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <motion.div initial={{ y: -150 }} animate={{ y: 0 }} transition={{ duration: "2", delay: "0" }} className="flex justify-center items-center">
                    <img className="md:h-[450px] px-10 md:px-0" src="https://i.ibb.co/7kcyYzg/1547059668-Haljz.jpg" alt=""/>
                </motion.div>
                <div className="lg:ml-8 flex justify-center items-center">
                    <motion.div initial={{ y: 150 }} animate={{ y: 0 }} transition={{ duration: "2", delay: "0" }}>
                        <h1 className="text-4xl text-[#AAB0B2] lg:mt-6">AT A GLANCE</h1>
                        <div className="space-y-2" data-aos="fade-up">
                            <p className="text-neutral-800 font-semibold md:text-lg mt-8">Architect: Ehsan Khan and Architects </p>
                            <p className="text-neutral-800 font-semibold md:text-lg">Land Area: 20.60 katha</p>
                            <p className="text-neutral-800 font-semibold md:text-lg">Orientation of the Land: East-West</p>
                            <p className="text-neutral-800 font-semibold md:text-lg">Front Road: 97 feet wide</p>
                            <p className="text-neutral-800 font-semibold md:text-lg">Number of Floors: Ground + 13 floors</p>
                            <p className="text-neutral-800 font-semibold md:text-lg">Floor Area: 5,323 - 8,427 sft (approx)</p>
                            <p className="text-neutral-800 font-semibold md:text-lg">Number of Basements: 03</p>
                            <p className="text-neutral-800 font-semibold md:text-lg">Number of Car Parking: 66</p>
                            <p className="text-neutral-800 font-semibold md:text-lg">RAJUK Approval No : 1022/10/908</p>
                        </div>
                    </motion.div>
                </div>
                <motion.div initial={{ y: -150 }} animate={{ y: 0 }} transition={{ duration: "2", delay: "0" }}>
                    <p className="lg:mt-8 text-neutral-400 px-20 lg:text-right">Amidst the rhythm of the city, our building emerges as a statement of distinction. Ehsan Khan and Architects have meticulously designed a space where every line, every angle, speaks the language of modern living. Beyond bricks and mortar, this structure encapsulates a vision of refined aesthetics and seamless functionality. It is not merely a building; it is a testament to our commitment to redefine urban living. Step into a realm where architectural brilliance meets the aspirations of a vibrant lifestyle, where every corner resonates with the echoes of a new era in living.</p>
                    <span className="text-neutral-400 mt-4 px-20">- SHANTA HOLDINGS</span>
                </motion.div>
            </div>
        </div >
    );
};

export default AboutBuilding;