import "../Header/all_CSS.css"
import React, {useState} from "react";
import Layout from "../Layout/Layout.jsx";

const MortgageCalculator = () => {
    const [homePrice, setHomePrice] = useState("");
    const [downPayment, setDownPayment] = useState("");
    const [monthlyInterestRate, setMonthlyInterestRate] = useState("");
    const [loanTermInMonths, setLoanTermInMonths] = useState("");
    const [monthlyMortgagePayment, setMonthlyMortgagePayment] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault()
        setMonthlyMortgagePayment(calculateMonthlyMortgagePayment)
    }

    const handleReset = async (e) => {
        setHomePrice("");
        setDownPayment("");
        setMonthlyInterestRate("");
        setLoanTermInMonths("");
        setMonthlyMortgagePayment(0);
    }
     function calculateMonthlyMortgagePayment() {
        setMonthlyMortgagePayment(((homePrice-downPayment)*((monthlyInterestRate*(Math.pow(1+monthlyInterestRate, loanTermInMonths)))/(Math.pow(1+monthlyInterestRate,loanTermInMonths)-1))).toFixed(2))
         return monthlyMortgagePayment
    }

    return (
        <>
            <Layout/>
            <div className="mortgage-calculator-body">
            <div className="mortgage-calculator-container ">
                <h1>Mortgage Calculator</h1>
                <form onSubmit={handleSubmit} onReset={handleReset} className="mortgage-calculator-form">
                    <div className="form-group">
                        <label className="mortgage-calculator-label" htmlFor="homePrice">Home Price</label>
                        <input
                            required
                            type="number"
                            name="homePrice"
                            value={homePrice}
                            onChange={(e) => setHomePrice(Number(e.target.value))}/>
                            <span className="homePrice-number">${homePrice}</span>
                    </div>
                    <div className="form-group">
                        <label className="mortgage-calculator-label" htmlFor="downPayment">Down Payment</label>
                        <input
                            type="number"
                            name="downPayment"
                            onChange={(e) => setDownPayment(Number(e.target.value))}/>
                        <span className="downPayment-number">${downPayment}</span>
                    </div>
                    <div className="form-group">
                        <label className="mortgage-calculator-label" htmlFor="monthlyInterestRate">Yearly Interest Rate</label>
                        <input
                            required
                            type="number"
                            name="monthlyInterestRate"
                            min="0"
                            max="100"
                            step="0.01"
                            onChange={(e) => setMonthlyInterestRate((Number(e.target.value)/100/12))}/>
                        <span className="monthlyInterestRate-number">{((monthlyInterestRate*100)*12).toFixed(2)}%</span>
                    </div>
                    <div className="form-group">
                        <label className="mortgage-calculator-label" htmlFor="loanTermInYears">Loan Term In Years</label>
                        <input
                            required
                            type="number"
                            name="loanTermInYears"
                            onChange={(e) => setLoanTermInMonths(Number(e.target.value)*12)}/>
                        <span className="homePrice-number">{loanTermInMonths/12}</span>
                    </div>
                    <div className="form-group">
                        <label className="mortgage-calculator-label" htmlFor="monthlyMortgagePayment">Monthly Mortgage Payment</label>
                        <input
                            readOnly
                            type="number"
                            name="monthtlyMortagePayment"
                            value={monthlyMortgagePayment}
                        />
                        <span className="monthlyMortgagePayment-number">${monthlyMortgagePayment}</span>
                    </div>
                    <button type="submit">Calculate</button>
                    <button type="reset">Reset</button>
                </form>
            </div>
            </div>
        </>
    )
}

export default MortgageCalculator;
