import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Loading/Loading";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const AdminRoute = ({children}) => {

    const location = useLocation();
    const {user, loading} = useAuth();
    const [isAdmin, pending] = useAdmin();

    if(loading || pending){
        return <Loading></Loading>
    }

    if(user && isAdmin){
        return children
    }

    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default AdminRoute;