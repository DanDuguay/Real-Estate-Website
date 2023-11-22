import { useContext } from "react";
import AuthContext from "../../../server/context/AuthProvider.jsx";

const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;