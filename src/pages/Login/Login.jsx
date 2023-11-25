import { Helmet } from "react-helmet-async";
import animation from "../../assets/Animation - 1700378841837 (1).json"
import Lottie from "lottie-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Login = () => {

    const { signInUser } = useAuth();

    let navigate = useNavigate();
    let location = useLocation();
  
    let from = location.state?.from?.pathname || "/";

    const {
        register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;
        signInUser(email, password)
        .then(() => {
            toast.success("Sign in Successful");
            navigate(from, { replace: true })
        })
        .catch(error => {
            toast.error(error?.message)
        })
    }

    return (
        <div className="hero min-h-screen bg-[#0d243e]">
            <Helmet>
                <title>Login | THE GLASS HOUSE</title>
            </Helmet>
            <div className="hero-content flex-col w-full lg:flex-row">
                <div className="text-center flex-1 lg:text-left lg:w-1/2 mx-auto">
                    <Lottie animationData={animation} loop={true} />
                </div>
                <div className="card flex-shrink-0 w-full flex-1 max-w-xl">

                    <form onSubmit={handleSubmit(onSubmit)} className="card-body text-[#f4f6f7]">
                        <h1 className="text-[#f4f6f7]">LOGIN</h1>
                        <p className="text-[#f4f6f7] text-4xl font-medium">Your Account </p>
                        <div className="form-control my-3">
                            <label
                                htmlFor="Email"
                                className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
                            >
                                <input
                                    type="email"
                                    id="Email"
                                    placeholder="Email"
                                    {...register("email", { required: true })}
                                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                />
                                {errors.email?.type === "required" && (
                                    <p className="text-red-600">Email is required</p>
                                )}
                                <span
                                    className="absolute start-0 top-2 -translate-y-1/2 text-xs text-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                                >
                                    Email
                                </span>
                            </label>
                        </div>
                        <div className="form-control my-3">
                            <label
                                htmlFor="Password"
                                className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
                            >
                                <input
                                    type="password"
                                    id="Password"
                                    {...register("password", { required: true })}
                                    placeholder="Password"
                                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                />
                                {errors.password?.type === "required" && (
                                    <p className="text-red-600">Password is required</p>
                                )}
                                <span
                                    className="absolute start-0 top-2 -translate-y-1/2 text-xs text-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                                >
                                    Password
                                </span>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="py-3 hover:bg-white hover:text-[#0d243e] active:bg-white active:text-[#0d243e] border-2 border-white rounded-xl text-white font-bold w-full" type="submit" value="SIGN IN" />
                        </div>
                    </form>
                    <p className="font-medium text-center mb-4 text-[#f4f6f7]">New here?  <Link className='font-bold' to="/register">Create a New Account</Link></p>
                    <p className="text-[#f4f6f7] mb-3 text-center font-medium">Or sign in with</p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;