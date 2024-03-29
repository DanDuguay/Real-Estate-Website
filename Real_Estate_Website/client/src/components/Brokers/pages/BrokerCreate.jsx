import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../Header/Header.jsx";
//import "./Broker_CSS.css";
import { createBroker } from "../../../utils/api.js"; // Update the import statement

const BrokerCreate = () => {
  const userRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate(); // Use navigate instead of history

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email) {
        setErrMsg("Name and email are required");
        return;
      }

      console.log(`name: ${name}. Email: ${email}, Password: ${password}`);
      const response = await createBroker({ name, email, password });
      if (response && response.success) {
        setSuccess(true);
      } else {
        setErrMsg("Failed to create broker");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrMsg("Something went wrong");
    }
  };

  return (
    <div style={{ background: "var(--blue)" }}>
      <Header />
      <div className="broker-page-body">
        {success ? (
          <section className="broker-page-section">
            <h1>Broker Added!</h1>
            <br />
            <p>
              <Link to="/brokerpage" className="broker-page-link">
                Go back to Broker Page
              </Link>
            </p>
          </section>
        ) : (
          <section className="broker-page-section">
            <p
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <h1>Add Broker</h1>
            <form className="broker-page-form" onSubmit={handleSubmit}>
              <label className="broker-page-label" htmlFor="name">
                Name
              </label>
              <input
                className="broker-page-input"
                type="text"
                id="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />

              <label className="broker-page-label" htmlFor="email">
                Email
              </label>
              <input
                className="broker-page-input"
                type="text"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />

              <label className="broker-page-label" htmlFor="password">
                Password
              </label>
              <input
                className="broker-page-input"
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />

              <button type="submit">Submit</button>
            </form>
          </section>
        )}
      </div>
    </div>
  );
};

export default BrokerCreate;
