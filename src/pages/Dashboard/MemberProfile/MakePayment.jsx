import { useNavigate } from "react-router-dom";
import Loading from "../../../Loading/Loading";
import useAgreement from "../../../hooks/useAgreement";
import useAuth from "../../../hooks/useAuth";

const MakePayment = () => {

    const [agreementData, isPending] = useAgreement();
    const {setPayment} = useAuth();
    const navigate = useNavigate();

    if (isPending) {
        return <Loading></Loading>
    }

    const showData = agreementData.filter(data => data.status === "checked");
    
    const handlePayment = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form?.email?.value;
        const floor = form?.floor?.value;
        const block = form?.block?.value;
        const apartment = form?.apartment?.value;
        const rent = form?.rent?.value;
        const month = form?.month?.value;
        const paymentDetails = { email, floor, block, apartment, rent, month };
        setPayment(paymentDetails);
        navigate("/dashboard/makePayments")
    }

    return (
        <div className="max-w-screen-xl mx-auto">
            <h1 className="text-xl p-4 md:pt-16 font-bold text-center md:text-left md:text-3xl">Make Payment</h1>
            {
                showData?.map(payment => <form onSubmit={handlePayment} key={payment?._id} className="card-body">
                    <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" value={payment?.email} readOnly placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Floor No.</span>
                            </label>
                            <input type="number" name="floor" value={payment?.floorNo} readOnly placeholder="Floor No." className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Block Name</span>
                            </label>
                            <input type="text" name="block" value={payment?.blockName} readOnly placeholder="Block Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Apartment No.</span>
                            </label>
                            <input type="number" name="apartment" value={payment?.apartmentNo} readOnly placeholder="Apartment No." className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Rent</span>
                            </label>
                            <input type="number" name="rent" value={payment?.rent} readOnly placeholder="Rent" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Month</span>
                            </label>
                            <select className="w-full input input-bordered" required name="month" id="">
                                <option value="January">January</option>
                                <option value="February">February</option>
                                <option value="March">March</option>
                                <option value="April">April</option>
                                <option value="May">May</option>
                                <option value="June">June</option>
                                <option value="July">July</option>
                                <option value="August">August</option>
                                <option value="September">September</option>
                                <option value="October">October</option>
                                <option value="November">November</option>
                                <option value="December">December</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="py-3 hover:bg-white hover:text-[#0d243e] hover:border hover:border-[#0d243e] active:bg-white active:text-[#0d243e] bg-[#0d243e] rounded-xl text-white font-bold w-full">PAY</button>
                    </div>
                </form>)
            }
        </div>
    );
};

export default MakePayment;