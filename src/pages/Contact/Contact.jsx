import { motion } from "framer-motion";
import { FaLocationDot, FaMessage } from "react-icons/fa6";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import toast from "react-hot-toast";
import Heading from "../../components/Heading/Heading";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Parallax } from 'react-parallax';
import { Helmet } from "react-helmet-async";

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_c1kaq1l', 'template_sbprd1h', form.current, 'kM2ZZ-I4QiQPp3W81')
            .then((result) => {
                if (result.text) {
                    toast.success('Successfully sended your message!')
                }
            }, (error) => {
                toast.error(error.text);
            });
    };


    return (
        <div>
            <Helmet>
                <title>Contact | THE GLASS HOUSE</title>
            </Helmet>
            <div className='mb-8 md:mb-16'>
                <Parallax
                    blur={{ min: -15, max: 15 }}
                    bgImage={"https://i.ibb.co/XsBsg05/21116299.jpg"}
                    bgImageAlt="the dog"
                    strength={-200}
                >
                    <div className="hero h-[300px] md:h-[400px] lg:h-[700px]">
                        <div className='absolute top-0 bg-gradient-to-r from-[#15151500] to-[#151515] w-full h-full text-white'>
                    </div>
                    </div>
                </Parallax>
            </div>
            <div className="pt-12">
                <Heading heading="Contact Us"></Heading>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-6 md:gap-16 max-w-screen-xl mx-auto text-white my-4 md:px-6">
                <motion.div initial={{ y: 150 }} animate={{ y: 0 }} transition={{ duration: "4", delay: "0" }}>
                    <form ref={form} onSubmit={sendEmail} className="p-0 md:p-8">
                        <div className="flex flex-col md:flex-row md:gap-12 gap-6 justify-center items-center">
                            <label
                                htmlFor="UserName"
                                className="relative block overflow-hidden border-b border-gray-200 text-black bg-transparent pt-3 focus-within:border-blue-600"
                            >
                                <input
                                    type="text"
                                    id="UserName"
                                    name="user_name"
                                    placeholder="Your Name"
                                    className="peer text-black h-8 w-72 border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" required
                                />
                                <span
                                    className="absolute left-0 top-2 -translate-y-1/2 text-xs transition-all text-black peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                                >
                                    Your Name
                                </span>

                            </label>
                            <label
                                htmlFor="UserEmail"
                                className="relative text-black block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
                            >
                                <input
                                    type="email"
                                    id="UserEmail"
                                    name="user_email"
                                    placeholder="Your Email"
                                    className="peer text-black h-8 w-72 border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" required
                                />
                                <span
                                    className="absolute text-black left-0 top-2 -translate-y-1/2 text-xs transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                                >
                                    Your Email
                                </span>

                            </label>
                        </div>
                        <div className="my-6">
                            <label
                                htmlFor="Subject"
                                className="relative text-black block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
                            >
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    placeholder="Subject Field"
                                    className="peer text-black h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" required
                                />
                                <span
                                    className="absolute text-black left-0 top-2 -translate-y-1/2 text-xs transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                                >
                                    Subject Field
                                </span>

                            </label>
                        </div>
                        <div>
                            <label htmlFor="OrderNotes" className="sr-only">Order notes</label>
                            <div className="overflow-hidden my-6">
                                <textarea
                                    id="OrderNotes"
                                    name="message"
                                    className="w-full border border-black resize-none border-x-0 border-t-0 text-black p-4 align-top sm:text-sm"
                                    rows="8"
                                    placeholder="Message Field" required
                                ></textarea>
                            </div>
                        </div>
                        <button className="flex gap-6 py-2 my-8 justify-center items-center w-full px-3 rounded-lg border border-[#0d243e] text-white hover:bg-white hover:text-[#0d243e] bg-[rgb(13,36,62)] " type="submit">Send Message <FaMessage /></button>
                    </form>
                </motion.div>
                <motion.div initial={{ y: -150 }} animate={{ y: 0 }} transition={{ duration: "4", delay: "0" }} className="text-black space-y-6 pb-6">
                    <p className="flex gap-6 items-center"><FaWhatsapp className="text-[#0d243e]" size={26}></FaWhatsapp><span className="flex flex-col gap-2"><span className="font-bold">Whatsapp</span><span>+8801719991111</span></span></p>
                    <p className="flex gap-6 items-center"><FaLocationDot className="text-[#0d243e]" size={26}></FaLocationDot><span className="flex flex-col gap-2"><span className="font-bold">Location</span><span>38 Gulshan Ave, Dhaka 1212</span>Dhaka - Bangladesh</span></p>
                    <p className="flex gap-6 items-center"><MdEmail className="text-[#0d243e]" size={26}></MdEmail><span className="flex flex-col gap-2"><span className="font-bold">Email</span><span>shantaholdings@gmail.com.</span>
                        <span>theglasshouse@gmail.com</span></span></p>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;