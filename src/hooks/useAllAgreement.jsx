import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllAgreement = () => {

    const axiosSecure = useAxiosSecure();

    const {data : allAgreement = [], isPending, refetch} = useQuery({
        queryKey : ["allAgreement"],
        queryFn : async () => {
            const res = await axiosSecure.get("/allAgreements");
            return res?.data;
        }
    })

    return [allAgreement, isPending, refetch]
};

export default useAllAgreement;