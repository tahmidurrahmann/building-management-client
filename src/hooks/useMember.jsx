import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useMember = () => {

    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data : isMember, isPending } = useQuery({
        queryKey: ["member", user?.email],
        enabled : !loading,
        queryFn : async () =>{
            const res = await axiosSecure.get(`/users/member/${user?.email}`);
            return res?.data?.isMember;
        }
    })

    return [isMember, isPending];
};

export default useMember;