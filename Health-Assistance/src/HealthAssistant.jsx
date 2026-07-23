import axios from "axios"
import { useState } from "react"
import "./styles/header.css"
import "./styles/health-assist.css"
import "./styles/disclaimer.css"
import { Sidebar } from "./component/Sidebar";

export function HealthAssistant() {
  const [symptoms, setSymptoms] = useState('');
  const [result, setResult] = useState(null)
  async function sendRequest() {
    const response = await axios.post('http://127.0.0.1:5000/api/responses', {
      symptoms
    })

    if(response.data.error){
      alert(response.data.error);
    } else {
      setResult(response.data);
      setSymptoms('');
    }
  }

  function enterRequest(event) {
    if(event.key === 'Enter') {
      sendRequest();
    } else if (event.key ==='Escape'){
      setSymptoms('');
    }
  }
  return (
    <>
      <div className="header">
        <div className="input-area">

          <input
            type="text"
            placeholder="Describe your Symptoms.. Example: Fever, Coughing, body pain..."
            className="input-box"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            onKeyDown={enterRequest}
          />
          <button className="send-button" onClick={sendRequest}>
            <img src="images/send-arrow.png" alt="" className="send-arrow" />
            <span>Send</span>
          </button>


        </div>
        <div className="powered-by">
          <img src="images/ai.png" alt="" className="gemini-img" />
          <span>Powered by Gemini</span>
        </div>
        <div className="light-dark-mode">
          <img src="images/light_mode.png" alt="" className="light-mode" />
          <img src="images/dark-mode.png" alt="" className="dark-mode" />
        </div>
      </div>
      <Sidebar />
      {result && (<div className="health-assist-page main-page">
        <div className="possible-cause main-content">
          <img src="images/possible_cause.png" alt="" className="main-image" />
          <h2>Possible Causes</h2>
          <ul>
            {
              result.possibleCauses.map((cause, index) => {
                return <li key={index}>{cause}</li>
              })
            }
          </ul>
        </div>
        <div className="severity main-content">
          <img src="images/severity.png" alt="" className="main-image" />
          <h2>Severity</h2>
          <div className="result-condition">{result.severity}</div>
          <div>You symptoms indicates a {result.severity} severity. Monitor your condition closely.</div>
        </div>
        <div className="medical-advice main-content">
          <img src="images/advice.png" alt="" className="main-image" />
          <h2>Advice</h2>
          <ul>
            {
              result.advice.map((advice, index) => {
                return <li key={index}>{advice}</li>
              })
            }
          </ul>
        </div>
        <div className="recommended-doctor main-content">
          <img src="images/doctor.png" alt="" className="main-image" />
          <h2>Recommended Doctor</h2>
          <ul>
            <li>{result.doctor}</li>
          </ul>
          <img src="images/main_doctor.jpeg" alt="" className="doctor-image" />
        </div>
      </div>)}

      <div className="bottom-disclaimer">
        <img src="images/health_safety.png" alt="" className="disclaimer-image" />
        <span>Disclaimer</span>
        <span className="disclaimer"> This AI assistant provide informational guidance only And is not substitute for professional medical advice, Diagnosis or treatment If symptoms are severe or worsening, consult a qualified healthcare professional or seek emergency care </span>
      </div>
    </>
  );
}