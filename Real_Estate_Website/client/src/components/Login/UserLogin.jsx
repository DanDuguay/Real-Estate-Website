import {useRef, useState, useEffect, useContext} from 'react';
import useAuth from "../../hooks/useAuth.jsx"
import { Link, useNavigate, useLocation } from "react-router-dom";
import UserProfile from "../UserProfile/UserProfile.jsx";
import UserRegister from "./UserRegister.jsx";
import Header from "../Header/Header.jsx";
import Layout from "../Layout/Layout.jsx";
import {prisma} from "../../../../server/config/prismaConfig.js";
import {CookiesProvider, useCookies} from "react-cookie";
import {getAllBrokers, getProperty, getUser, userExists} from "../../utils/api.js";
import {useQuery} from "react-query";
import useCheckUser from "../../hooks/useCheckUser.jsx";
import axios, {AxiosError} from "axios";
//import "./UserLogin_CSS.css"

const UserLogin = () => {
    const { setAuth } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(()=> {
        setErrMsg("");
    }, [user, pwd])


    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {name: user, password: pwd}
        try {
            const response = await axios.post("http://localhost:4000/api/user/getuser", data, {
            });
            const response_role = response.data.user.role;
            setAuth({name: user, password: pwd, role: [response_role], id: response.data.user.id})
            console.log(response.data.user.id);
            setUser('');
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
                           onChange={(e)=> setUser(e.target.value)}
                           value={user}
                           required
                    />

                    <label className="user-login-label"  htmlFor="password">Password</label>
                    <input className="user-login-input"
                           type="password"
                           id="password"
                           onChange={(e)=> setPwd(e.target.value)}
                           value={pwd}
                           required
                    />

                    <button className="user-login-button" >sign In</button>
                </form>
                <p>
                    Need an Account?<br />
                    <span className="line">
                        <Link to="/user/registeruser">Sign Up</Link>
                    </span>
                </p>
            </section>
        </body>
     </>
    )
}
export default UserLogin