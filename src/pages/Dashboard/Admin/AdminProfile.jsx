import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loading from "../../../Loading/Loading";

const AdminProfile = () => {

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: numberOfTotalRooms } = useQuery({
        queryKey: ["totalNumberOfRooms"],
        queryFn: async () => {
            const res = await axiosSecure.get("/total-rooms");
            return res?.data?.count
        }
    })

    const { data: numberOfMembers, isPending } = useQuery({
        queryKey: ["totalNumberOfMembers"],
        queryFn: async () => {
            const res = await axiosSecure.get("/member-number");
            return res?.data;
        }
    })

    const { data: numberOfUsers, isPending: isLoading } = useQuery({
        queryKey: ["totalNumberOfUsers"],
        queryFn: async () => {
            const res = await axiosSecure.get("/user-number");
            return res?.data;
        }
    })

    const { data, isPending: isLoad } = useQuery({
        queryKey: ["availableUnavailable"],
        queryFn: async () => {
            const res = await axiosSecure.get("/available-unavailable");
            return res?.data;
        }
    })


    if (isPending || isLoading || isLoad) {
        return <Loading></Loading>
    }

    const totalApartments = data?.apartmentTotal;
    const agreementTotal = data?.bookedTotal;
    const bookedPercentages = (agreementTotal / totalApartments) * 100;
    const bookedPercentage = bookedPercentages.toFixed(2);
    const availablePercentages = 100 - bookedPercentage;
    const availablePercentage = availablePercentages.toFixed(2);

    return (
        <div className="px-12">
            <h1 className="text-lg font-bold py-6">Admin Profile</h1>
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10 rounded-lg border p-6">
                <div className="avatar">
                    <div className="w-24 rounded-full">
                        <img referrerPolicy="no-referrer" src={user?.photoURL} />
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-xl font-semibold">{user?.displayName}</h1>
                    <h2 className="font-medium text-neutral-400">{user?.email}</h2>
                </div>
            </div>
            <section className="bg-white">
                <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
                    <div className="mt-8 sm:mt-12">
                        <dl className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                            <div className="flex flex-col rounded-lg bg-blue-100 px-4 py-8 text-center">
                                <dt className="order-last text-lg font-medium text-gray-500">
                                    Total Rooms
                                </dt>

                                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                                {numberOfTotalRooms}
                                </dd>
                            </div>

                            <div className="flex flex-col rounded-lg bg-blue-100 px-4 py-8 text-center">
                                <dt className="order-last text-lg font-medium text-gray-500">
                                Available Rooms
                                </dt>

                                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">{availablePercentage} %</dd>
                            </div>

                            <div className="flex flex-col rounded-lg bg-blue-100 px-4 py-8 text-center">
                                <dt className="order-last text-lg font-medium text-gray-500">
                                Unavailable Rooms
                                </dt>

                                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">{bookedPercentage} %</dd>
                            </div>
                            <div className="flex flex-col rounded-lg bg-blue-100 px-4 py-8 text-center">
                                <dt className="order-last text-lg font-medium text-gray-500">
                                Number of Members
                                </dt>

                                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">{numberOfMembers?.length}</dd>
                            </div>
                            <div className="flex flex-col rounded-lg bg-blue-100 px-4 py-8 text-center">
                                <dt className="order-last text-lg font-medium text-gray-500">
                                Number of Users
                                </dt>

                                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">{numberOfUsers?.length}</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AdminProfile;