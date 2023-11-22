import {useRef, useState, useEffect} from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import UserProfile from "../UserProfile/UserProfile.jsx";
import UserRegister from "./UserRegister.jsx";
//import "./UserLogin_CSS.css"
import { userExists } from "../../../../server/controllers/userCntrl";
import {prisma} from "../../../../server/config/prismaConfig.js";
import Header from "../Header/Header.jsx";
import Layout from "../Layout/Layout.jsx";
import useAuth from "../../hooks/useAuth.jsx";
import axios, {AxiosError} from "axios";

const AdminLogin = () => {
    const { setAuth } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const userRef = useRef();
    const errRef = useRef();

    const [admin, setAdmin] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(()=> {
        setErrMsg("");
    }, [admin, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {name: admin, password: pwd}
        try {
            const response = await axios.post("http://localhost:4000/api/admin/getadmin", data, {
            });
            console.log("[AdminLogin.jsx][handleSubmit][response]: " + JSON.stringify(response));
            const response_role = response.data.admin.role;
            console.log("[AdminLogin.jsx][handleSubmit][response_role]: " + response_role);
            setAuth({name: admin, password: pwd, role: [response_role]});
            setAdmin('');
            setPwd('');
            navigate(from, { replace: true});

        } catch (err) {
            if (err && err instanceof AxiosError)
                setErrMsg(err.response?.data.message);
            else if (err && err instanceof Error) setErrMsg(err.message)
        }
    }

    return (
        <>
            <Layout/>
            <body className="user-login-body" >
                <section className="user-login-section">
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Sign In</h1>
                    <form className="user-login-form" onSubmit={handleSubmit}>
                        <label htmlFor="username">Username</label>
                        <input className="user-login-input"
                               type="text"
                               id="username"
                               ref={userRef}
                               autoComplete="off"
                               onChange={(e)=> setAdmin(e.target.value)}
                               value={admin}
                               required
                        />

                        <label className="user-login-label" htmlFor="password">Password</label>
                        <input className="user-login-input"
                               type="password"
                               id="password"
                               onChange={(e)=> setPwd(e.target.value)}
                               value={pwd}
                               required
                        />

                        <button className="user-login-button">sign In</button>
                    </form>
                </section>
            </body>
        </>
    )
}
export default AdminLogin