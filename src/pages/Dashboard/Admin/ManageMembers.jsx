import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loading from "../../../Loading/Loading";
import Swal from "sweetalert2";

const ManageMembers = () => {

    const axiosSecure = useAxiosSecure();

    const { data, isPending, refetch } = useQuery({
        queryKey: ["members"],
        queryFn: async () => {
            const res = await axiosSecure.get("/users");
            return res?.data;
        }
    })

    if (isPending) {
        return <Loading></Loading>
    }

    const checkMember = data.filter(person => person.role === "member");

    const handleRemoveMember = async (id) => {
        const res = await axiosSecure.patch(`/users/${id}`);
        if (res?.data?.modifiedCount) {
            Swal.fire({
                title: "You Successfully Remove this Member",
                showClass: {
                    popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                },
                hideClass: {
                    popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                }
            });
            refetch();
        }
    }

    return (
        <div className="max-w-screen-xl mx-auto my-10 md:my-20">
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            checkMember?.map((member, index) => <tr key={member?._id}>
                                <th>{index + 1}</th>
                                <td>{member?.name}</td>
                                <td>{member?.email}</td>
                                <td className="flex"><span onClick={() => handleRemoveMember(member?._id)} className="py-1 px-2 border rounded-lg bg-[#0d243e] text-white font-medium hover:bg-white hover:text-[#0d243e] hover:border hover:border-[#0d243e]">Remove Member</span></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageMembers;