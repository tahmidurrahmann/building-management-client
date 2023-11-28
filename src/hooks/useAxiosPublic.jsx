import axios from "axios";

const axiosPublic = axios.create({
    baseURL : "https://build-minder-server.vercel.app"
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;