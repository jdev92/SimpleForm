
const StepTwo = ({ name, email, password, setStep }) => {

    return <div className="container">
        <div className="results">
            <h1>Results</h1>
            <div>
                <span>Name: {name} </span>
                <span>Email: {email} </span>
                <span>Password: {password} </span>
                <button className="back-button" onClick={() => {
                    setStep(1);
                }}>Edit your information</button>
            </div>
        </div>
    </div>


}

export default StepTwo;