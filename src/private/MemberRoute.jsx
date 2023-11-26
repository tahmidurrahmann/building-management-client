import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Loading/Loading";
import useAuth from "../hooks/useAuth";
import useMember from "../hooks/useMember";

const MemberRoute = ({children}) => {

    const location = useLocation();
    const {user, loading} = useAuth();
    const [isMember, isPending] = useMember(); 

    if(loading || isPending){
        return <Loading></Loading>
    }

    if(user && isMember){
        return children
    }

    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default MemberRoute;