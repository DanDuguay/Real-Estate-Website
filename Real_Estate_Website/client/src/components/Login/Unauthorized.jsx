import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    return(
        <body className = "user-login-body">
            <section className="user-login-section">
                <h1>Unauthorized</h1>
                <br/>
                <p>You do not have access to the requested page.</p>
                <br/>
                <br/>
                <div className = "flexGrow">
                    <button onClick={goBack}>Go Back</button>
                </div>
            </section>
        </body>
    )
}

export default Unauthorized