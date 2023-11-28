import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loading from "../../../Loading/Loading";
import { useEffect, useState } from "react";

const PaymentHistory = () => {

    const [history, setHistory] = useState([]);
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: paymentHistory = [], isPending} = useQuery({
        queryKey: ["paymentHistory", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/show-payment-history?email=${user?.email}`);
            return res?.data;
        }
    })

    useEffect(() => {
        setHistory(paymentHistory)
    }, [paymentHistory])

    if (isPending) {
        return <Loading></Loading>
    }

    const handleSearchMonth = (e) => {
        e.preventDefault();
        const form = e.target;
        const month = form.month.value;
        const searchData = history.filter(item => item?.month.toLowerCase() == month.toLowerCase());
        setHistory(searchData);
    }

    return (
        <div className="lg:px-12">
            <h1 className="text-xl text-center lg:text-left font-bold py-6 md:text-3xl">Payment History</h1>
            <form onSubmit={handleSearchMonth} className="flex justify-center items-center gap-6 my-6">
                <input name="month" type="text" placeholder="Search Payments by Month Name" className="input input-bordered md:w-1/2" required />
                <input className="py-3 bg-[#0d243e] px-6 hover:bg-white hover:text-[#0d243e] active:bg-white active:text-[#0d243e] rounded-xl text-white font-bold hover:border hover:border-[#0d243e]" type="submit" value="Search" />
            </form>
            <div className="overflow-x-auto">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>Rent</th>
                            <th>Payment Month</th>
                            <th>TransactionId</th>
                            <th>Apartment No.</th>
                            <th>Floor No.</th>
                            <th>Block Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            history?.map((payment, index) => <tr key={payment?._id}>
                                <th>{index + 1}</th>
                                <td>{payment?.email}</td>
                                <td>$ {payment?.price}</td>
                                <td>{payment?.month}</td>
                                <td>{payment?.transactionId}</td>
                                <td>{payment?.apartment}</td>
                                <td>{payment?.floor}</td>
                                <td>{payment?.block}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default PaymentHistory;