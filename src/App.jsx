import Form from './components/Form';
import StepTwo from './components/StepTwo';
import Footer from './components/Footer';
import { useState } from 'react';
import './App.css'

function App() {

  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  return (
    <>
      <div className="container">

        {step === 1 ?
          <Form
            name={name}
            email={email}
            password={password}
            confirmPassword={confirmPassword}
            setName={setName}
            setEmail={setEmail}
            setPassword={setPassword}
            setConfirmPassword={setConfirmPassword}
            setStep={setStep}

          /> : <StepTwo

            name={name}
            email={email}
            password={password}
            setStep={setStep}

          />}

        <Footer />

      </div>
    </>
  )
}

export default App;
