import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const usePayments = () => {

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data : payments = [], isPending} = useQuery({
        queryKey: ["payments", user?.email],
        queryFn : async () => {
            const res = await axiosSecure.get(`/payments?email=${user?.email}`);
            return res?.data;
        }
    })

    return [payments, isPending]
};

export default usePayments;