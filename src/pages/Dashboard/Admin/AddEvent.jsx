import { Helmet } from "react-helmet-async";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { MdEvent } from "react-icons/md";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddEvent = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const axiosSecure = useAxiosSecure();

    const handleAddEvent = async (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const startDate = form.startDate.value;
        const endDate = form.endDate.value;
        const eventDetails = {title, startDate, endDate};
        const res = await axiosSecure.post("/events", eventDetails);
        if(res?.data?.insertedId){
            Swal.fire({
                title: "Good job!",
                text: "You added a Event!",
                icon: "success"
              });
              form.reset();
        }
    }

    return (
        <div className="max-w-screen-xl mx-auto">
            <Helmet>
                <title>Add Event | THE GLASS HOUSE</title>
            </Helmet>
            <h1 className="text-xl md:text-3xl font-bold py-6">Add Event</h1>
            <form onSubmit={handleAddEvent} className="px-6 lg:px-0">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold text-lg">Event Title</span>
                    </label>
                    <input type="text" name="title" placeholder="Event Title" className="input input-bordered" required />
                </div>
                <div className="flex justify-between items-center gap-6 py-6">
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text font-bold text-lg">Event Start Date</span>
                        </label>
                        <DatePicker name="startDate" className="border rounded-lg p-3 w-full" selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text font-bold text-lg">Event Start Date</span>
                        </label>
                        <DatePicker name="endDate" className="border rounded-lg p-3 w-full" selected={endDate} onChange={(date) => setEndDate(date)} />
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <button className="flex justify-center items-center gap-3 rounded-md bg-[#0d243e] w-full py-3 font-semibold my-6 text-white hover:bg-white hover:text-[#0d243e] hover:border hover:border-[#0d243e] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75" type="submit"><MdEvent />  Add Event</button>
                </div>
            </form>
        </div>
    );
};

export default AddEvent;