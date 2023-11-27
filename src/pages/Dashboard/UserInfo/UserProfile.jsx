import Loading from "../../../Loading/Loading";
import useAgreement from "../../../hooks/useAgreement";
import useAuth from "../../../hooks/useAuth";

const UserProfile = () => {

    const { user } = useAuth();
    const [agreementData, isPending] = useAgreement();

    if (isPending) {
        return <Loading></Loading>
    }

    console.log(agreementData);

    return (
        <div className="px-12">
            <h1 className="text-lg font-bold py-6">My Profile</h1>
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
            <div className="mt-10 border rounded-lg p-6 md:p-12 space-y-12">
                <h1 className="text-lg font-bold pb-4">Agreement Information</h1>
                {
                    agreementData?.map(agreement => <div key={agreement?._id} className="text-neutral-400 flex flex-col md:flex-row md:gap-48 justify-start">
                        <div className="flex flex-col">
                            <div className="flex flex-row md:flex-col justify-between items-center md:items-start md:gap-0">
                                <h1>Accept Date</h1>
                                <p>None</p>
                            </div>
                            <div className="flex flex-row md:flex-col justify-between items-center md:items-start md:gap-0">
                                <h1>Floor No.</h1>
                                <p>None</p>
                            </div>
                        </div>
                        <div className="flex flex-col">
                        <div className="flex flex-row md:flex-col justify-between items-center md:items-start md:gap-0">
                                <h1>Room No.</h1>
                                <p>None</p>
                            </div>
                            <div className="flex flex-row md:flex-col justify-between items-center md:items-start md:gap-0">
                                <h1>Block No.</h1>
                                <p>None</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default UserProfile;