import { Helmet } from "react-helmet-async";
import Loading from "../../Loading/Loading";
import ApartmentBanner from "./ApartmentBanner";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Apartment = () => {

    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const [page, setPage] = useState(0);
    const { user } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const { data: { result, totalApartment } = [], isPending } = useQuery({
        queryKey: ["apartments", page],
        queryFn: async () => {
            const res = await axiosPublic.get(`/apartments?page=${page}`);
            return res?.data;
        }
    })

    if (isPending) {
        return <Loading></Loading>
    }

    const totalPage = Math.ceil(totalApartment / 6);

    const pages = [];
    for (let i = 0; i < totalPage; i++) {
        pages.push(i)
    }

    const handleAgreementSubmit = async (apartment) => {
        const agreementInfos = {
            name: user?.displayName,
            email: user?.email,
            floorNo: apartment?.floorNo,
            blockName: apartment?.blockName,
            apartmentNo: apartment?.apartmentNo,
            rent: apartment?.rent,
            status: "pending",
            date: new Date().toISOString().split('T')[0],
        }
        if (user && user?.email) {
            const res = await axiosSecure.post("/agreementInfo", agreementInfos)
            if (res?.data?.insertedId) {
                Swal.fire({
                    title: "Thanks for agreement this room!",
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
            }
        }
        else {
            Swal.fire({
                title: "Login required for this action!",
                text: "You should login first for agreement this room!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }

    return (
        <div>
            <Helmet>
                <title>Apartment | THE GLASS HOUSE</title>
            </Helmet>
            <ApartmentBanner></ApartmentBanner>

            <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 lg:p-0 mb-12">
                {
                    result.map(apartment => <div className="group overflow-hidden cursor-pointer rounded-md" key={apartment._id}>
                        <img
                            alt="Home"
                            src={apartment?.apartmentImage}
                            className="h-56 w-full rounded-md group-hover:scale-110 
                            transition"
                        />
                        <div className="mt-2">
                            <dl>
                                <div>
                                    <dt className="sr-only">Price</dt>

                                    <dd className="text-sm text-gray-500">${apartment?.rent}</dd>
                                </div>
                            </dl>
                            <div className="mt-6 flex items-center gap-2 lg:gap-8 text-xs md:text-sm">
                                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                                    <div className="mt-1.5 sm:mt-0">
                                        <p className="text-gray-500">Floor no</p>

                                        <p className="font-medium">{apartment?.floorNo}</p>
                                    </div>
                                </div>
                                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">


                                    <div className="mt-1.5 sm:mt-0">
                                        <p className="text-gray-500">Block name</p>

                                        <p className="font-medium">{apartment?.blockName}</p>
                                    </div>
                                </div>
                                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                                    <div className="mt-1.5 sm:mt-0">
                                        <p className="text-gray-500">Apartment no</p>

                                        <p className="font-medium">{apartment?.apartmentNo}</p>
                                    </div>
                                </div>
                                <div>
                                    <button onClick={() => handleAgreementSubmit(apartment)} className="px-3 py-1 rounded-lg border border-[#0d243e] text-white hover:bg-white hover:text-[#0d243e] bg-[rgb(13,36,62)] ">Agreement</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <div className="flex gap-6 justify-center items-center mb-10">
                {
                    pages.map((item, index) => <button className={`px-4 py-2 rounded-md border hover:bg-[rgb(13,36,62)] hover:text-white ${page == index ? "bg-[rgb(13,36,62)] text-white" : ""}`} key={index} onClick={() => setPage(index)}>{index + 1}</button>)
                }
            </div>
        </div>
    );
};

export default Apartment;