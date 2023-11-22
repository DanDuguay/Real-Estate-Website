import { useLocation, Navigate, Outlet} from "react-router-dom";
import useAuth from "../../hooks/useAuth.jsx";

const RequireAuth = ({ allowedRoles}) => {
    const { auth} = useAuth();
    const location = useLocation();

    return (
        auth?.role?.find(role => allowedRoles?.includes(role))
            ? <Outlet/>
            : auth?.name
                ? <Navigate to="/unauthorized" state={{from: location}} replace />
                : <Navigate to="/" state={{from: location}} replace />
    );
}

export default RequireAuth;