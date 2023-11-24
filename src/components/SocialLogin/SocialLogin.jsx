import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const SocialLogin = () => {

    const { googleLogin } = useAuth();

    const handleGoogleLogin = () => {
        googleLogin()
        .then(result => {
            const user = result?.user;
            console.log(user);
            toast.success("Google Sign in successful")
        })
        .catch(error => {
            toast.error(error?.message)
        })
    }

    return (
        <div className="text-white w-1/2 mx-auto">
            <p onClick={handleGoogleLogin} className="flex gap-4 justify-center items-center uppercase py-3 hover:bg-white hover:text-[#0d243e] active:bg-white active:text-[#0d243e] border-2 border-white rounded-xl text-white font-bold">sign in with<FaGoogle size={24} /></p>
        </div>
    );
};

export default SocialLogin;