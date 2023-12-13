import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useEvents = () => {

    const axiosSecure = useAxiosSecure();

    const {data : allEvents = [], isPending : isEvents} = useQuery({
        queryKey : ["allEvents"],
        queryFn : async () => {
            const res = await axiosSecure.get("/events");
            return res?.data;
        }
    })

    return [allEvents, isEvents]
};

export default useEvents;