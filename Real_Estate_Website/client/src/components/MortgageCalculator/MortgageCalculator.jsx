import "../Header/all_CSS.css"
import React, {useState} from "react";
import Layout from "../Layout/Layout.jsx";

const MortgageCalculator = () => {
    const [homePrice, setHomePrice] = useState(0);
    const [downPayment, setDownPayment] = useState(0);
    const [monthlyInterestRate, setMonthlyInterestRate] = useState(0);
    const [loanTermInMonths, setLoanTermInMonths] = useState(0);
    const [monthlyMortgagePayment, setMonthlyMortgagePayment] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault()
        setHomePrice(0);
        setLoanTermInMonths(0);
        setDownPayment(0);
        setMonthlyInterestRate(0);
        setMonthlyMortgagePayment(0);
    }
     function calculateMonthlyMortgagePayment() {
        setMonthlyMortgagePayment(homePrice*((monthlyInterestRate*(Math.pow(1+monthlyInterestRate, loanTermInMonths)))/(Math.pow(1+monthlyInterestRate,loanTermInMonths)-1)))
         return monthlyMortgagePayment
    }

    return (
        <>
            <Layout/>
            <div className="mortgage-calculator-container">
                <h1>Mortgage Calculator</h1>
                <form onSubmit={handleSubmit} className="mortgage-calculator-form">
                    <div className="form-group">
                        <label className="mortgage-calculator-label" htmlFor="homePrice">Home Price</label>
                        <input
                            type="range"
                            name="homePrice"
                            value={homePrice}
                            min="1000"
                            max="100,000,000"
                            step="10000"
                            onChange={(e) => {
                                setHomePrice(Number(e.target.value))
                                setMonthlyMortgagePayment(calculateMonthlyMortgagePayment())}}
                            />
                            <span className="homePrice-number">${homePrice}</span>
                    </div>
                    <div className="form-group">
                        <label className="mortgage-calculator-label" htmlFor="downPayment">Down Payment</label>
                        <input
                            type="range"
                            name="downPayment"
                            value={downPayment}
                            min="1000"
                            max={homePrice}
                            step="1000"
                            onChange={(e) => {
                                setDownPayment(Number(e.target.value))
                                setMonthlyMortgagePayment(calculateMonthlyMortgagePayment())}}
                        />
                        <span className="downPayment-number">${downPayment}</span>
                    </div>
                    <div className="form-group">
                        <label className="mortgage-calculator-label" htmlFor="monthlyInterestRate">Yearly Interest Rate</label>
                        <input
                            type="range"
                            name="monthlyInterestRate"
                            value={monthlyInterestRate}
                            min="1"
                            max="100"
                            step="1"
                            onChange={(e) => {
                                setMonthlyInterestRate((Number(e.target.value)/100)/12)
                                setMonthlyMortgagePayment(calculateMonthlyMortgagePayment())}}
                        />
                        <span className="monthlyInterestRate-number">${(monthlyInterestRate*100)*12}</span>
                    </div>
                    <div className="form-group">
                        <label className="mortgage-calculator-label" htmlFor="loanTermInYears">Loan Term In Years</label>
                        <input
                            type="number"
                            name="loanTermInYears"
                            value={loanTermInMonths}
                            min="1"
                            max="50"
                            onChange={(e) => {
                                setLoanTermInMonths(Number(e.target.value)*12)
                                setMonthlyMortgagePayment(calculateMonthlyMortgagePayment())}}
                        />
                        <span className="homePrice-number">${loanTermInMonths*12}</span>
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
                    <button type="submit">Reset Form</button>
                </form>
            </div>
        </>
    )
}

export default MortgageCalculator;
