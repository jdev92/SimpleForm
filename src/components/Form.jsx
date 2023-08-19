
const Form = ({
    name,
    email,
    password,
    confirmPassword,
    setName,
    setEmail,
    setPassword,
    setConfirmPassword,
    setStep,
}) => {

    return <div className="container">

        <h1>Create account</h1>

        <form onSubmit={(event) => {
            event.preventDefault();
            if (confirmPassword === password) {
                setStep(2);
            } else {
                alert("Vos mots de passe ne sont pas identiques")
            }

        }} >
            <label htmlFor="name">Name</label>
            <input
                type="text"
                name="name"
                placeholder="Jean Dupont"
                value={name}
                onChange={(event) => {
                    setName(event.target.value);
                }}
            />
            <label htmlFor="email">Email</label>
            <input
                type="text"
                name="email"
                placeholder="jeandupont@lereacteur.io"
                value={email}
                onChange={(event) => {
                    setEmail(event.target.value);
                }}
            />
            <label htmlFor="password">Password</label>
            <input
                type="password"
                name="password"
                placeholder="lErEaCtEuR2023"
                value={password}
                onChange={(event) => {
                    setPassword(event.target.value);
                }}
            />
            <label htmlFor="confirmPassword">Confirm your password</label>
            <input
                type="confirmPassword"
                name="confirmPassword"
                placeholder="lErEaCtEuR2023"
                value={confirmPassword}
                onChange={(event) => {
                    setConfirmPassword(event.target.value);
                }}
            />

            <button type="submit">Register</button>

        </form>
    </div>

}

export default Form;