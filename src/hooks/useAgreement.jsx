import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAgreement = () => {

    const {user, loading} = useAuth();
    const axiosSecure = useAxiosSecure();

    const {data : agreementData, isPending} = useQuery({
        queryKey : ["agreement", user?.email],
        enabled : !loading,
        queryFn : async () => {
            const res = await axiosSecure.get(`/agreementInfo?email=${user?.email}`);
            return res?.data;
        }
    })

    return [agreementData, isPending]
};

export default useAgreement;