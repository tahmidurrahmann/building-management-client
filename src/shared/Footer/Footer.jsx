import { FaFacebookF } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content">
            <div className="footer max-w-screen-2xl mx-auto">
                <aside className="space-y-1">
                    <img className="w-[200px]" src="https://shantaholdings.com/admin/settings_images/Shanta-holdings-logo-white-1678170808.svg" alt="" />
                    <p>© 2023 Shanta Holdings Ltd.</p>
                    <p>Designed & Developed by Tahmidur Rahman.</p>
                </aside>
                <nav>
                    <header className="footer-title">Social</header>
                    <div className="grid grid-flow-col gap-4">
                        <a rel="noreferrer" target="_blank" href="https://www.facebook.com/shantaholdings/"><FaFacebookF size={23}></FaFacebookF></a>
                        <a rel="noreferrer" target="_blank" href="https://www.instagram.com/shantaholdings/?hl=en"><FaYoutube size={26}></FaYoutube></a>
                        <a rel="noreferrer" target="_blank" href="https://www.youtube.com/channel/UCH2kciy0CmoAiI20rU9KR7A"><FaInstagram size={26} /></a>
                        <a rel="noreferrer" target="_blank" href="https://www.pinterest.com/shantaholdingsltd/?eq=shanta%20hold&etslf=8103"><FaPinterestP size={26} /></a>
                    </div>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;