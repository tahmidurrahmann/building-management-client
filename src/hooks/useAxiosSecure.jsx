import axios from "axios";

const axiosSecure = axios.create({
    baseURL: "https://build-minder-server.vercel.app",
})

const useAxiosSecure = () => {
    axiosSecure.interceptors.request.use(function (config) {
        config.headers.authorization = `Bearer ${localStorage.getItem("access-token")}`;
        return config;
    }, function (error) {
        return Promise.reject(error);
    })

    axiosSecure.interceptors.response.use(function(response){
        return response;
    }, function(error){
        console.log(error);
    })

    return axiosSecure;
};

export default useAxiosSecure;