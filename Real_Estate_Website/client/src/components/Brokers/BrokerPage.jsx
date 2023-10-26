import {useRef, useState, useEffect} from 'react';
import { Link } from "react-router-dom";
const BrokerPage = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [broker, setBroker] = useState("");
    const [brokerCreate, setBrokerCreate] = useState(false);

    return (
        <body className="broker-page-body">
            <section className="broker-page-section">
                <h1>What would you like to do?</h1>
                <br />
                <p>
                    <Link to="/brokercreate">Create Broker</Link>
                    <br />
                    <Link to="/brokerupdate">Update Broker</Link>
                </p>
            </section>
        </body>
    )
}

export default BrokerPage