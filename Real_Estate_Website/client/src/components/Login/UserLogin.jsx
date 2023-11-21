import {useRef, useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import UserProfile from "../UserProfile/UserProfile.jsx";
import UserRegister from "./UserRegister.jsx";
import Header from "../Header/Header.jsx";
import Layout from "../Layout/Layout.jsx";
import {prisma} from "../../../../server/config/prismaConfig.js";
import {CookiesProvider, useCookies} from "react-cookie";
import {getAllBrokers, getProperty, getUser, userExists} from "../../utils/api.js";
import {useQuery} from "react-query";
import useCheckUser from "../../hooks/useCheckUser.jsx";
import axios from "axios";
//import "./UserLogin_CSS.css"

const UserLogin = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const [cookies, setCookie] = useCookies(["user"]);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(()=> {
        setErrMsg("");
    }, [user, pwd])


    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {name: user, password: pwd}
        console.log("[UserLogin.jsx][handleSubmit][checkUser]: " + checkUser)
        if (checkUser > 0)
        {
            console.log("[UserLogin.jsx][handleSubmit][userObj]: " + userObj)
            setCookie("user", userObj);
            setUser('');
            setPwd('');
            setSuccess(true);
        }
    }

    return (
        <CookiesProvider>
            <Layout/>
            <body className="user-login-body" >
            {cookies.user ? (
                <section className="user-login-section">
                    <h1>You are logged in, {cookies.user["name"]}</h1>
                    <br />
                    <p>
                        <Link to="/userprofile">Go to User Profile</Link>
                    </p>
                </section>
            ) : (
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
            )}
            </body>
        </CookiesProvider>

    )
}
export default UserLogin