import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { RiCoupon5Line } from "react-icons/ri";
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import useCoupon from '../../../hooks/useCoupon';
import Loading from '../../../Loading/Loading';
import { MdOutlineDelete } from "react-icons/md";
import { Helmet } from 'react-helmet-async';

const ManageCoupon = () => {

    const [coupons, isPending, refetch] = useCoupon();

    const axiosSecure = useAxiosSecure();
    let [isOpen, setIsOpen] = useState(false);

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    if (isPending) {
        return <Loading></Loading>
    }

    const handleAddCoupon = async (e) => {
        e.preventDefault();
        const form = e.target;
        const code = form.code.value;
        const discount = parseInt(form.discount.value);
        const description = form.description.value;
        const couponData = {
            code: code,
            discount: discount,
            description: description,
        }
        const res = await axiosSecure.post("/couponData", couponData);
        if (res?.data?.insertedId) {
            Swal.fire({
                title: "Well Done!",
                text: "You added A Coupon!",
                icon: "success"
            });
            form.reset();
            refetch();
        }
    }

    const handleDeleteCoupon = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/delete-coupon/${id}`)
                    .then(res => {
                        if (res?.data?.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch();
                        }
                    })
            }
        });
    }

    return (
        <div className='px-2 md:px-12'>
            <Helmet>
                <title>Manage Coupons | THE GLASS HOUSE</title>
            </Helmet>
            <div className='max-w-screen-xl mx-auto'>
                <h1 className='text-xl md:text-3xl font-bold py-6 text-center md:text-left'>Manage Coupons</h1>
                <div className="overflow-x-auto font-medium">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Coupon Code</th>
                                <th>Discount Percentage</th>
                                <th>Coupon Description</th>
                                <th>Availability</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                coupons?.map((coupon, index) => <tr key={coupon?._id}>
                                    <th>{index + 1}</th>
                                    <td>{coupon?.code}</td>
                                    <td>{coupon?.discount} %</td>
                                    <td>{coupon?.description}</td>
                                    <td><MdOutlineDelete onClick={() => handleDeleteCoupon(coupon?._id)} className='text-red-600 px-1 py-0.5 rounded border border-red-600 hover:text-white hover:bg-red-600' size={26} /></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="my-10 flex items-center justify-center">
                <button
                    type="button"
                    onClick={openModal}
                    className="flex justify-center items-center gap-1 rounded-md bg-[#0d243e] px-4 py-2 text-sm font-medium text-white hover:bg-white hover:text-[#0d243e] hover:border hover:border-[#0d243e] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
                >
                    Add Coupon <RiCoupon5Line />
                </button>
            </div>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <div>
                                        <form onSubmit={handleAddCoupon} className="card-body">
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text font-semibold text-base">Coupon Code</span>
                                                </label>
                                                <input type="text" name='code' placeholder="Coupon Code" className="input input-bordered" required />
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text font-semibold text-base">Discount Percentage</span>
                                                </label>
                                                <input type="number" name='discount' placeholder="Discount Percentage" className="input input-bordered" required />
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text font-semibold text-base">Coupon Description</span>
                                                </label>
                                                <textarea name="description" placeholder='Coupon Description' className='p-4 border' id="" cols="30" rows="6"></textarea>
                                            </div>
                                            <div className="form-control mt-6">
                                                <button className="flex justify-center items-center gap-1 rounded-md bg-[#0d243e] px-4 py-2 text-sm font-medium text-white hover:bg-white hover:text-[#0d243e] hover:border hover:border-[#0d243e] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">Add Coupon</button>
                                            </div>
                                        </form>
                                    </div>

                                    <div className="mt-4">
                                        <button onClick={closeModal} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    );
};

export default ManageCoupon;