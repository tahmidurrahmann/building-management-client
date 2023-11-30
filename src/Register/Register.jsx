import { Helmet } from "react-helmet-async";
import animation from "../assets/Animation - 1700378841837 (1).json"
import Lottie from "lottie-react";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../components/SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useAuth from "../hooks/useAuth";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";

const apiKey = import.meta.env.VITE_IMGBB_ACCESS_TOKEN;
const apiURL = `https://api.imgbb.com/1/upload?key=${apiKey}`;

const Register = () => {

    const axiosPublic = useAxiosPublic();
    const { createUser } = useAuth();
    let navigate = useNavigate();

    const {
        register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = async (data) => {
        const name = data.name;
        const email = data.email;
        const password = data.password;
        const photoFile = data.photo[0];
        const photoObj = { image: photoFile };
        const uploadImage = await axiosPublic.post(apiURL, photoObj, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        });
        const image = uploadImage.data?.data?.display_url;
        createUser(email, password)
            .then(result => {
                const user = result?.user;
                updateProfile(user, {
                    displayName: name, photoURL: image
                }).then(async () => {
                    toast.success("Successfully created your profile");
                    const saveLoginIntoDB = {
                        email: email,
                        name: name,
                        role: "user",
                    };
                    const res = await axiosPublic.post("/users", saveLoginIntoDB);
                    console.log(res?.data);
                    navigate("/")
                }).catch((error) => {
                    toast.error(error?.message)
                });
            })
            .catch(error => {
                toast.error(error?.message);
            })
    }

    return (
        <div className="hero min-h-screen bg-[#0d243e]">
            <Helmet>
                <title>Register | THE GLASS HOUSE</title>
            </Helmet>
            <div className="hero-content flex gap-4 flex-col w-full lg:flex-row-reverse">
                <div className="text-center flex-1 lg:text-left mx-auto">
                    <Lottie animationData={animation} loop={true} />
                </div>
                <div className="card flex-shrink-0 w-full flex-1 max-w-xl">

                    <form onSubmit={handleSubmit(onSubmit)} className="card-body text-[#f4f6f7]">
                        <h1 className="text-[#f4f6f7]">SIGNUP</h1>
                        <p className="text-[#f4f6f7] text-4xl font-medium">Your Account </p>
                        <div className="form-control my-3">
                            <label
                                htmlFor="Name"
                                className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
                            >
                                <input
                                    type="text"
                                    id="Name"
                                    placeholder="UserName"
                                    {...register("name", { required: true })}
                                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                />
                                {errors.name?.type === "required" && (
                                    <p className="text-red-600">Name is required</p>
                                )}
                                <span
                                    className="absolute start-0 top-2 -translate-y-1/2 text-xs text-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                                >
                                    Name
                                </span>
                            </label>
                        </div>
                        <div className="form-control my-3">
                            <label
                                htmlFor="Email"
                                className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
                            >
                                <input
                                    type="email"
                                    id="Email"
                                    {...register("email", { required: true })}
                                    placeholder="Email"
                                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent  focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
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
                                    {...register("password", { required: true, maxLength: 20, minLength: 6, pattern: /^(?=.*[!@#$%^&*()_+{}:;<>,.?~\\|-])/ })}
                                    placeholder="Password"
                                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                />
                                {errors.password?.type === "required" && (
                                    <p className="text-red-600">Password is required</p>
                                )}
                                {errors.password?.type === "maxLength" && (
                                    <p className="text-red-600">Password cannot more than 20 characters.</p>
                                )}
                                {errors.password?.type === "minLength" && (
                                    <p className="text-red-600">Password cannot less than 6 characters.</p>
                                )}
                                {errors.password?.type === "pattern" && (
                                    <p className="text-red-600">Password must have One uppercase, One lowercase, One numeric, and One special character.</p>
                                )}
                                <span
                                    className="absolute start-0 top-2 -translate-y-1/2 text-xs text-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                                >
                                    Password
                                </span>
                            </label>
                        </div>
                        <input type="file"
                            {...register("photo", { required: true })}
                            className="file-input text-[#0d243e] w-full max-w-2xl" />
                        <div className="form-control mt-6">
                            <input className="py-3 hover:bg-white hover:text-[#0d243e] active:bg-white active:text-[#0d243e] border-2 border-white rounded-xl text-white font-bold w-full" type="submit" value="SIGN UP" />
                        </div>
                    </form>
                    <p className="font-medium text-center mb-4 text-[#f4f6f7]">Already registered? <Link className='font-bold' to="/login">Go to log in</Link></p>
                    <p className="text-[#f4f6f7] mb-3 text-center font-medium">Or</p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Register;