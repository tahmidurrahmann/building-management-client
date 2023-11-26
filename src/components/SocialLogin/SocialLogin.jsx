import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SocialLogin = () => {

    let navigate = useNavigate();
    const location = useLocation();
    const axiosPublic = useAxiosPublic();
    let from = location.state?.from?.pathname || "/";
    const { googleLogin } = useAuth();

    const handleGoogleLogin = () => {
        googleLogin()
        .then((result) => {
            const saveDataToDB = {
                email : result?.user?.email,
                name : result?.user?.displayName,
                role : "user",
            }
            axiosPublic.post("/users", saveDataToDB)
            .then(res => {
                console.log(res?.data);
            })
            toast.success("Google Sign in successful")
            navigate(from, { replace: true })
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