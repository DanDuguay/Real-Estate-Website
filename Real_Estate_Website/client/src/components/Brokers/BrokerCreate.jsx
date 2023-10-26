import {useRef, useState, useEffect} from "react";
import {Link} from "react-route-dom";

const BrokerCreate = () => {
    return (
        <div style={{background:"var(--blue)"}}>
            <Header/>
            <body className="broker-page-body">
            <section className="broker-page-section">
                <h1>Add Broker</h1>
                <form className="broker-page-form">
                    <label htmlFor="name">Name</label>
                    <input className="broker-page-input"
                           type="text"
                           id="name"
                           />

                </form>
            </section>
            </body>
        </div>
    )
}