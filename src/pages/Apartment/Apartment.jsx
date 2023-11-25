import { Helmet } from "react-helmet-async";
import useApartment from "../../hooks/useApartment";
import Loading from "../../Loading/Loading";
import ApartmentBanner from "./ApartmentBanner";

const Apartment = () => {

    const [apartments, isPending] = useApartment();

    if (isPending) {
        return <Loading></Loading>
    }
console.log(apartments);
    return (
        <div>
            <Helmet>
                <title>Apartment | THE GLASS HOUSE</title>
            </Helmet>
            <ApartmentBanner></ApartmentBanner>

            <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 lg:p-0">
                {
                    apartments.map(apartment => <div key={apartment._id}>
                        <img
                            alt="Home"
                            src={apartment?.apartmentImage}
                            className="h-56 w-full rounded-md object-cover"
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
                                    <button className="px-3 py-1 rounded-lg border border-[#0d243e] text-white hover:bg-white hover:text-[#0d243e] bg-[rgb(13,36,62)] ">Agreement</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Apartment;