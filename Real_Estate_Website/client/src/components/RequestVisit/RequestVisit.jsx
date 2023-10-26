import React, { Component } from 'react';
import {Link} from "react-router-dom";
import "./RequestVisit.css"

class RequestVisitForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            property: 'property1',
            timeSlots: [],
            selectedTimeSlot: '',
        };
    }

    timeSlots = {
        property1: ["9:00 AM", "11:00 AM", "2:00 PM"],
        property2: ["10:00 AM", "1:00 PM", "3:00 PM"],
        property3: ["9:30 AM", "12:00 PM", "4:00 PM"],
    };

    handlePropertyChange = (event) => {
        const selectedProperty = event.target.value;
        const timeSlots = this.timeSlots[selectedProperty] || [];
        this.setState({
            property: selectedProperty,
            timeSlots: timeSlots,
            selectedTimeSlot: '',
        });
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        // Handle form submission, e.g., send data to the server
        // You can access form data via this.state
    };

    render() {
        return (
            <div>
                <h1>Request for Visit</h1>
                <form onSubmit={this.handleFormSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={this.state.name}
                        onChange={(e) => this.setState({ name: e.target.value })}
                    />

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={this.state.email}
                        onChange={(e) => this.setState({ email: e.target.value })}
                    />

                    <label htmlFor="property">Property:</label>
                    <select
                        id="property"
                        name="property"
                        value={this.state.property}
                        onChange={this.handlePropertyChange}
                    >
                        <option value="property1">Property 1</option>
                        <option value="property2">Property 2</option>
                        <option value="property3">Property 3</option>
                    </select>

                    <label htmlFor="timeSlot">Available Time Slot:</label>
                    <select
                        id="timeSlot"
                        name="timeSlot"
                        disabled={this.state.timeSlots.length === 0}
                        value={this.state.selectedTimeSlot}
                        onChange={(e) => this.setState({ selectedTimeSlot: e.target.value })}
                    >
                        <option value="">Select a time slot</option>
                        {this.state.timeSlots.map((slot) => (
                            <option key={slot} value={slot}>
                                {slot}
                            </option>
                        ))}
                    </select>

                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default RequestVisitForm;
