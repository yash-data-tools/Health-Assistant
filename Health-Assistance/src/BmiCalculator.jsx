import "./styles/sidebar.css"
import "./styles/bmiHeader.css"
import "./styles/disclaimer.css"
import "./styles/mainBMI.css"
import { Sidebar } from "./component/Sidebar"
import { useState } from "react"
import axios from "axios"

export function BmiCalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [bmi, setBmi] = useState(null);

  async function getBMI() {
    const response = await axios.post("http://localhost:5000/api/bmi", {
      height, 
      weight,
      age
    });
    setBmi(response.data)
    // setAge('');
    // setHeight('')
  }

  function resetBMI(){
    setAge('');
    setHeight('');
    setBmi(null);
    setWeight('');
  }

  return (
    <>
      <Sidebar />
      <div className="header">
        <div className="bmi-notice">
          <div className="bmi-title">BMI Calculator</div>
          <div>Calulate your Body Mass Index and know your Health Status.</div>
        </div>
        <img src="images/bmi_calc.jpeg" className="bmi-image" alt="" />
      </div>
      <div className="bmi-page">
        <div className="bmi-details">
          <div className="details">
            <div className="detail-title">
              <img src="images/bmi_calc.png" alt="" />
              <span>Enter Your Details</span>
            </div>
            <div className="height-details">
              <div>Height</div>
              <input
                type="text"
                className="detail-textbox"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
                placeholder="Enter Your Height in m" />
            </div>
            <div className="weight-details">
              <div>Weight</div>
              <input
                type="text"
                className="detail-textbox"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
                placeholder="Enter Your Weight in Kg" />
            </div>
            <div className="age-details">
              <div>Age (Optional)</div>
              <input
                type="text"
                className="detail-textbox"
                value={age}
                onChange={(e)=>setAge(e.target.value)}
                placeholder="Enter Your Age" />
            </div>
            <button className="calculate-button" onClick={getBMI}>
              <img src="images/bmi_calc.png" alt="" />
              <span>Calculate BMI</span>
            </button>
            <button className="clear-button" onClick={resetBMI}>
              Reset
            </button>
          </div>
          <div className="result-details">

            <div className="final-result">
              <div className="bmi">{bmi ? bmi.result : "00"}</div>
              <div className="bmi-unit"> Kg/m <sup>2</sup> </div>
              <div className="normal-condition">{bmi ? bmi.check : ""}</div>
            </div>
            <div className="define">
              {bmi ?bmi.define.map((item, index) => {
                return <p key={index}>{item}</p>
              }) : <p>Enter your height and weight to calculate your BMI and know your health status.</p>}
            </div>
            <div className="recall">
              <div className="height-recall all-recall-box">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                    fill="#0000F5">
                    <path
                      d="M840-320h-40v119q0 23-10.5 40T762-133q-17 11-37.5 12t-40.5-9L124-408q-23-11-33.5-30.5T80-479q0-21 10.5-41t33.5-31l560-280q20-10 40.5-8.5T762-827q17 11 27.5 28t10.5 40v119h40v80H680v-80h40v-117l-176 87q27 43 41.5 91t14.5 99q0 51-14.5 100T543-288l176 87v-119h-39v-80h160v80Zm-370-5q24-34 37-73.5t13-81.5q0-42-13-80.5T471-634L160-480l310 155Z" />
                  </svg>
                  <span>Healthy BMI Range</span>
                </div>
                <div className="height-number number">18.5-24.9</div>
              </div>
              <div className="height-recall all-recall-box">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                    fill="#75FB4C">
                    <path
                      d="M480-120 320-280l56-56 64 63v-414l-64 63-56-56 160-160 160 160-56 57-64-64v414l64-63 56 56-160 160Z" />
                  </svg>
                  <span>Your Height</span>
                </div>
                <div className="height-number number">{bmi ? bmi.height*100 : "00"} cm</div>
              </div>
              <div className="weight-recall all-recall-box">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                    fill="#F19E39">
                    <path
                      d="M240-200h480l-57-400H297l-57 400Zm240-480q17 0 28.5-11.5T520-720q0-17-11.5-28.5T480-760q-17 0-28.5 11.5T440-720q0 17 11.5 28.5T480-680Zm113 0h70q30 0 52 20t27 49l57 400q5 36-18.5 63.5T720-120H240q-37 0-60.5-27.5T161-211l57-400q5-29 27-49t52-20h70q-3-10-5-19.5t-2-20.5q0-50 35-85t85-35q50 0 85 35t35 85q0 11-2 20.5t-5 19.5ZM240-200h480-480Z" />
                  </svg>
                  <span>Your Weight</span>
                </div>
                <div className="weight-number number">{bmi ? bmi.weight : "00"} Kg</div>
              </div>
              <div className="age-recall all-recall-box">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                    fill="#9B5278">
                    <path
                      d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v255l-80 80v-175H200v400h248l80 80H200Zm0-560h560v-80H200v80Zm0 0v-80 80ZM662-60 520-202l56-56 85 85 170-170 56 57L662-60Z" />
                  </svg>
                  <span>Your Age</span>
                </div>
                <div className="age-number number">{bmi ? bmi.age:"00"} years</div>
              </div>
            </div>
          </div>
        </div>
        <div className="bmi-classification">
          <div className="underweight classify">
            <div className="underweight-title">Underweight</div>
            <div className="underweight-number"> &#60;18.5 </div>
          </div>
          <div className="normal classify">
            <div className="normal-title">Normal</div>
            <div className="normal-number">18.5-24.9</div>
          </div>
          <div className="overweight classify">
            <div className="overweight-title">Overweight</div>
            <div className="overweight-number">25-29.9</div>
          </div>
          <div className="obese classify">
            <div className="obese-title">Obese</div>
            <div className="obese-number">30-34.9</div>
          </div>
          <div className="severely-obese classify">
            <div className="severely-obese-title">Severely Obese</div>
            <div className="severely-obese-number">&#8805;35</div>
          </div>
        </div>
      </div>

      <div className="bottom-disclaimer">
        <img src="images/health_safety.png" alt="" className="disclaimer-image" />
        <span>Disclaimer</span>
        <span className="disclaimer"> BMI is a screening tool and not a diagnostic of body fatness or health. It does not take
          Into account muscle mass, Bone density, age, gender or Ethnicity. Consult a healthcare professional for
          personalized advice </span>
      </div>
    </>
  )
}