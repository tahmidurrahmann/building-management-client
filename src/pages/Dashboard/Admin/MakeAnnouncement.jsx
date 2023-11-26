import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MakeAnnouncement = () => {

    const axiosSecure = useAxiosSecure();

    const handleMakeAnnouncement = async (e) => {
        e.preventDefault();
        const form = e.target;
        const announcements = {
            title: form?.title?.value,
            description: form?.description?.value,
        }
        const res = await axiosSecure.post("/announcements", announcements);
        if (res?.data?.insertedId) {
            Swal.fire({
                title: "Your Announcement successfully Published!",
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
            form.reset();
        }
    }

    return (
        <div className="px-12">
            <h1 className="text-3xl font-bold p-6">Make Announcement</h1>
            <form onSubmit={handleMakeAnnouncement} className="card-body space-y-6">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold text-lg">Title</span>
                    </label>
                    <input type="text" name="title" placeholder="Title" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold text-lg">Description</span>
                    </label>
                    <textarea className="border rounded-lg p-6" placeholder="Write your description here!" name="description" id="" required cols="30" rows="10"></textarea>
                </div>
                <div className="form-control mt-6">
                    <input className="py-3 rounded-lg bg-[#0d243e] text-white font-semibold hover:bg-white hover:text-[#0d243e] hover:border hover:border-[#0d243e]" type="submit" value="Make Announcement" />
                </div>
            </form>
        </div>
    );
};

export default MakeAnnouncement;