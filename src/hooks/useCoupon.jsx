import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useCoupon = () => {

    const axiosSecure = useAxiosSecure();

    const {data : coupons = [], isPending, refetch} = useQuery({
        queryKey : ["coupon"],
        queryFn : async () => {
            const res = await axiosSecure.get("/get-coupon-info");
            return res?.data;
        }
    })

    return [coupons, isPending, refetch]
};

export default useCoupon;