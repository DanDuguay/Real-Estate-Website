import { useRef, useState, useEffect} from "react";
import { faCheck, faTimes, faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import './UserLogin_CSS.css'

const USER_REGEX = /^[a-zA-z][a-z-A-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,25}$/;

const Register = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus,setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        const result = USER_REGEX.test(user);
        console.log(result);
        console.log(user);
        setValidName(result);
    }, [user])

    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        console.log(result);
        console.log(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd;
        setValidMatch(match);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }
        setSuccess(true);
    }

    return (
        <body className="user-login-body">
            { success ? (
                <section className="user-login-section">
                    <h1>Success!</h1>
                    <p>
                        <Link to="/loginuser">Sign In</Link>
                    </p>
                </section>
            ) : (
       <section className="user-login-section">
           <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
           <h1>Register</h1>
           <form className="user-login-form" onSubmit={handleSubmit}>
               <label className="user-login-label" htmlFor="username">Username:
                   <span className={validName ? "valid" : "hide"}>
                       <FontAwesomeIcon icon={faCheck} />
                   </span>
                   <span className={validName  || !user ? "hide" : "invalid"}>
                       <FontAwesomeIcon icon={faTimes} />
                   </span>
               </label>
               <input className="user-login-input"
                   type="text"
                   id="username"
                   ref={userRef}
                   autoComplete="off"
                   onChange={(e) => setUser (e.target.value)}
                   required
                   aria-invalid={validName ? "false" : "true"}
                   aria-describedby="uidnote"
                   onFocus={() => setUserFocus(true)}
                   onBlur={() => setUserFocus(false)}
               />
               <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                   <FontAwesomeIcon icon={faInfoCircle} />
                   4 to 24 characters.<br />
                   Must begin with a letter.<br />
                   Letters, numbers, underscores, hyphens allowed.
               </p>

               <label className="user-login-label" htmlFor="password">Password:
                   <span className={validMatch && matchPwd ? "valid" : "hide"}>
                       <FontAwesomeIcon icon={faCheck} />
                   </span>
                   <span className={validMatch  || !matchPwd ? "hide" : "invalid"}>
                       <FontAwesomeIcon icon={faTimes} />
                   </span>
               </label>
               <input className="user-login-input"
                   type="password"
                   id="password"
                   onChange={(e) => setPwd(e.target.value)}
                   required
                   aria-invalid={validPwd ? "false" : "true"}
                   aria-describedby="pwdnote"
                   onFocus={() => setPwdFocus(true)}
                   onBlur={() => setPwdFocus(false)}
               />
               <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                   <FontAwesomeIcon icon={faInfoCircle} />
                   8 to 24 characters.<br />
                   Must include uppercase and lowercase letters, a number and a special character.<br />
                   Allowed special characters: <span aria-label="exclamation mark">!</span>
                   <span aria-label="at symbol">@</span> <span aria-label="hastag">#</span>
                   <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
               </p>

               <label className="user-login-label" htmlFor="confirm_pwd">Confirm Password:
                   <span className={validMatch && matchPwd ? "valid" : "hide"}>
                       <FontAwesomeIcon icon={faCheck} />
                   </span>
                   <span className={validMatch  || !matchPwd ? "hide" : "invalid"}>
                       <FontAwesomeIcon icon={faTimes} />
                   </span>
               </label>
               <input className="user-login-input"
                   type="password"
                   id="confirm_pwd"
                   onChange={(e) => setMatchPwd(e.target.value)}
                   required
                   aria-invalid={validMatch ? "false" : "true"}
                   aria-describedby="confirmnote"
                   onFocus={() => setMatchFocus(true)}
                   onBlur={() => setMatchFocus(false)}
               />
               <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                   <FontAwesomeIcon icon={faInfoCircle} />
                   Must match the first password input field.
               </p>

               <button className="user-login-button" disabled={!validName || !validPwd || !validMatch}>Sign Up</button>
           </form>

           <p>
               Already registered? <br />
               <span className="line">
                   <Link to="/loginuser">Sign In</Link>
               </span>
           </p>
       </section>
            )}
        </body>
    )
}

export default Register
