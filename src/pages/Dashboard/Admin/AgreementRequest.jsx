import Swal from "sweetalert2";
import Loading from "../../../Loading/Loading";
import useAllAgreement from "../../../hooks/useAllAgreement";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AgreementRequest = () => {

    const [allAgreement, isPending, refetch] = useAllAgreement();
    const axiosSecure = useAxiosSecure();

    if (isPending) {
        return <Loading></Loading>
    }

    const handleAcceptUser = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to accept this agreement!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Accept it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/makeMemberAndCheck/${id}`)
                    .then(res => {
                        if (res?.data?.result1?.modifiedCount && res?.data?.result2?.modifiedCount) {
                            Swal.fire({
                                title: "success!",
                                text: "This user is Member now!",
                                icon: "success"
                              });
                            refetch();
                        }
                    })
            }
        });
    }

    const handleRejectUser = (id) => {
        console.log(id);
    }

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold pb-6">All Agreement Requests</h1>
            <div className="overflow-x-auto">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Floor No.</th>
                            <th>Block Name</th>
                            <th>Room No.</th>
                            <th>Rent</th>
                            <th>Agreement Request Date</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allAgreement.map((item, index) => <tr key={item._id}>
                                <th>{index + 1}</th>
                                <td>{item?.name}</td>
                                <td>{item?.email}</td>
                                <td>{item?.floorNo}</td>
                                <td>{item?.blockName}</td>
                                <td>{item?.apartmentNo}</td>
                                <td>${item?.rent}</td>
                                <td>{item?.date}</td>
                                <td><span onClick={() => handleAcceptUser(item._id)} className={`${item?.status === "checked" ? "text-primary text-base font-bold" : "px-2 py-1 border rounded bg-[#0d243e] text-white hover:bg-white hover:text-[#0d243e] hover:border hover:border-[#0d243e]"}`}>{item?.status === "checked" ? "Checked" : "Accept"}</span></td>
                                <td><span onClick={()=>handleRejectUser(item._id)} className="px-2 py-1 border rounded bg-[#0d243e] text-white hover:bg-white hover:text-[#0d243e] hover:border hover:border-[#0d243e]">Reject</span></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AgreementRequest;