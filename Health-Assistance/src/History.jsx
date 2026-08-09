import { Fragment, useEffect, useState } from 'react';
import './styles/history.css'
import axios from 'axios';
import { Sidebar } from './component/Sidebar';

export function Histroy() {
  const [history, setHistory] = useState([]);

  const loadHistory = async () => {
    const response = await axios.get('http://localhost:5000/api/results')
    setHistory(response.data);
  }

  useEffect(() => {
    loadHistory()
  }, [])


  return (
    <>
      <Sidebar />

      <div className="main">
        <header className="topbar">
          <h1>History</h1>
          <p className="sub">Past symptom checks and the guidance you were given</p>
        </header>

        <div className="content">
          <div className="count-row"><strong>{history.length}</strong> consultations logged</div>
          {history.toReversed().map((item) => {
            return <details
              className="history-entry"
              key={item.id}>
              <summary>
                <div className="entry-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1FA24A" strokeWidth="2">
                    <path d="M12 2 3 6v6c0 5 3.8 8.7 9 10 5.2-1.3 9-5 9-10V6l-9-4Z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <div className="entry-main">
                  <p className="entry-query">{item.data.Symptoms}</p>
                </div>
                <span className={`severity-pill ${item.data.severity.toLowerCase()}`}>{item.data.severity} </span>
                <svg className="chev" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </summary>
              <div className="entry-panel">
                <div className="card-grid">
                  <div className=".info-card-final">
                    <div className="card-icon causes">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1FA24A" strokeWidth="2">
                        <circle cx="12" cy="12" r="4" />
                        <path
                          d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" />
                      </svg>
                    </div>
                    <h3>Possible Causes</h3>
                    <ul className="check-list">
                      {item.data.possibleCauses.map((cause, index) => {
                        return (
                          <Fragment  key={`012oy-${index}ohk23`}>
                            <li>{cause}</li>
                          </Fragment>
                        );
                      })}
                    </ul>
                  </div>
                  <div className=".info-card-final">
                    <div className="card-icon severity">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E8952E" strokeWidth="2">
                        <path d="M12 2 3 6v6c0 5 3.8 8.7 9 10 5.2-1.3 9-5 9-10V6l-9-4Z" />
                      </svg>
                    </div>
                    <h3>Severity</h3>
                    <span className={`severity-tag ${item.data.severity.toLowerCase()}`}>{item.data.severity}</span>
                    <p className="severity-note">Your symptoms indicate a {item.data.severity} severity. Monitor your condition closely.</p>
                  </div>
                  <div className=".info-card-final">
                    <div className="card-icon advice">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5B6FE0" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" />
                        <path d="M3 10h18M8 2v4M16 2v4" />
                      </svg>
                    </div>
                    <h3>Advice</h3>
                    <ul className="check-list">
                      {item.data.advice.map((givenAdice, index) => {
                        return (
                          <Fragment key={`abc-21d-${index}fre`}>
                            <li>{givenAdice}</li>
                          </Fragment>
                        );
                      })}
                    </ul>
                  </div>
                  <div className=".info-card-final">
                    <div className="card-icon doctor">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D763A6" strokeWidth="2">
                        <circle cx="12" cy="8" r="4" />
                        <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" />
                      </svg>
                    </div>
                    <h3>Recommended Doctor</h3>
                    <ul className="check-list">
                      <li>{item.data.doctor}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </details>
          })}

          {/* <details className="history-entry">
              <summary>
                <div className="entry-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1FA24A" strokeWidth="2">
                    <path d="M12 2 3 6v6c0 5 3.8 8.7 9 10 5.2-1.3 9-5 9-10V6l-9-4Z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <div className="entry-main">
                  <p className="entry-query">Fever, coughing, body pain</p>
                  <div className="entry-sub"><span>Today</span><span className="dot"></span><span>9:14 AM</span></div>
                </div>
                <span className="severity-pill mild">Mild</span>
                <svg className="chev" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </summary>
              <div className="entry-panel">
                <div className="card-grid">
                  <div className=".info-card-final">
                    <div className="card-icon causes">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1FA24A" strokeWidth="2">
                        <circle cx="12" cy="12" r="4" />
                        <path
                          d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" />
                      </svg>
                    </div>
                    <h3>Possible Causes</h3>
                    <ul className="check-list">
                      <li><span className="check-box g"><svg width="9" height="9" viewBox="0 0 24 24" fill="none"
                        stroke="#1FA24A" strokeWidth="3">
                        <path d="M20 6 9 17l-5-5" />
                      </svg></span>Common cold</li>
                      <li><span className="check-box g"><svg width="9" height="9" viewBox="0 0 24 24" fill="none"
                        stroke="#1FA24A" strokeWidth="3">
                        <path d="M20 6 9 17l-5-5" />
                      </svg></span>Allergic rhinitis</li>
                      <li><span className="check-box g"><svg width="9" height="9" viewBox="0 0 24 24" fill="none"
                        stroke="#1FA24A" strokeWidth="3">
                        <path d="M20 6 9 17l-5-5" />
                      </svg></span>Influenza</li>
                      <li><span className="check-box g"><svg width="9" height="9" viewBox="0 0 24 24" fill="none"
                        stroke="#1FA24A" strokeWidth="3">
                        <path d="M20 6 9 17l-5-5" />
                      </svg></span>Upper respiratory tract infection</li>
                    </ul>
                  </div>
                  <div className=".info-card-final">
                    <div className="card-icon severity">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E8952E" strokeWidth="2">
                        <path d="M12 2 3 6v6c0 5 3.8 8.7 9 10 5.2-1.3 9-5 9-10V6l-9-4Z" />
                      </svg>
                    </div>
                    <h3>Severity</h3>
                    <span className="severity-tag mild">Mild</span>
                    <p className="severity-note">Your symptoms indicate a mild severity. Monitor your condition closely.</p>
                  </div>
                  <div className=".info-card-final">
                    <div className="card-icon advice">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5B6FE0" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" />
                        <path d="M3 10h18M8 2v4M16 2v4" />
                      </svg>
                    </div>
                    <h3>Advice</h3>
                    <ul className="check-list">
                      <li><span className="check-box b"><svg width="9" height="9" viewBox="0 0 24 24" fill="none"
                        stroke="#5B6FE0" strokeWidth="3">
                        <path d="M20 6 9 17l-5-5" />
                      </svg></span>Stay hydrated by drinking plenty of fluids</li>
                      <li><span className="check-box b"><svg width="9" height="9" viewBox="0 0 24 24" fill="none"
                        stroke="#5B6FE0" strokeWidth="3">
                        <path d="M20 6 9 17l-5-5" />
                      </svg></span>Get adequate rest</li>
                      <li><span className="check-box b"><svg width="9" height="9" viewBox="0 0 24 24" fill="none"
                        stroke="#5B6FE0" strokeWidth="3">
                        <path d="M20 6 9 17l-5-5" />
                      </svg></span>Use a humidifier or take a steamy shower to soothe airways</li>
                      <li><span className="check-box b"><svg width="9" height="9" viewBox="0 0 24 24" fill="none"
                        stroke="#5B6FE0" strokeWidth="3">
                        <path d="M20 6 9 17l-5-5" />
                      </svg></span>Monitor for high fever or difficulty breathing</li>
                      <li><span className="check-box b"><svg width="9" height="9" viewBox="0 0 24 24" fill="none"
                        stroke="#5B6FE0" strokeWidth="3">
                        <path d="M20 6 9 17l-5-5" />
                      </svg></span>Consult a pharmacist regarding over-the-counter antihistamines or cough suppressants
                      </li>
                    </ul>
                  </div>
                  <div className=".info-card-final">
                    <div className="card-icon doctor">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D763A6" strokeWidth="2">
                        <circle cx="12" cy="8" r="4" />
                        <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" />
                      </svg>
                    </div>
                    <h3>Recommended Doctor</h3>
                    <ul className="check-list">
                      <li><span className="check-box p"><svg width="9" height="9" viewBox="0 0 24 24" fill="none"
                        stroke="#D763A6" strokeWidth="3">
                        <path d="M20 6 9 17l-5-5" />
                      </svg></span>General Practitioner</li>
                    </ul>
                  </div>
                </div>
              </div>
            </details>
            <details className="history-entry">
              <summary>
                <div className="entry-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1FA24A" strokeWidth="2">
                    <path d="M12 2 3 6v6c0 5 3.8 8.7 9 10 5.2-1.3 9-5 9-10V6l-9-4Z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <div className="entry-main">
                  <p className="entry-query">Sharp pain in lower right abdomen</p>
                  <div className="entry-sub"><span>Yesterday</span><span className="dot"></span><span>6:40 PM</span></div>
                </div>
                <span className="severity-pill severe">Severe</span>
                <svg className="chev" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </summary>
              <div className="entry-panel">
                <div className="card-grid">
                  <div className=".info-card-final">
                    <div className="card-icon causes">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1FA24A" strokeWidth="2">
                        <circle cx="12" cy="12" r="4" />
                        <path
                          d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" />
                      </svg>
                    </div>
                    <h3>Possible Causes</h3>
                    <ul className="check-list">
                      <li><span className="check-box g"><svg width="9" height="9" viewBox="0 0 24 24" fill="none"
                        stroke="#1FA24A" strokeWidth="3">
                        <path d="M20 6 9 17l-5-5" />
                      </svg></span>Appendicitis</li>
                      <li><span className="check-box g"><svg width="9" height="9" viewBox="0 0 24 24" fill="none"
                        stroke="#1FA24A" strokeWidth="3">
                        <path d="M20 6 9 17l-5-5" />
                      </svg></span>Ovarian cyst</li>
                      <li><span className="check-box g"><svg width="9" height="9" viewBox="0 0 24 24" fill="none"
                        stroke="#1FA24A" strokeWidth="3">
                        <path d="M20 6 9 17l-5-5" />
                      </svg></span>Kidney stone</li>
                      <li><span className="check-box g"><svg width="9" height="9" viewBox="0 0 24 24" fill="none"
                        stroke="#1FA24A" strokeWidth="3">
                        <path d="M20 6 9 17l-5-5" />
                      </svg></span>Severe constipation</li>
                    </ul>
                  </div>
                  <div className=".info-card-final">
                    <div className="card-icon severity">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E8952E" strokeWidth="2">
                        <path d="M12 2 3 6v6c0 5 3.8 8.7 9 10 5.2-1.3 9-5 9-10V6l-9-4Z" />
                      </svg>
                    </div>
                    <h3>Severity</h3>
                    <span className="severity-tag severe">Severe</span>
                    <p className="severity-note">Your symptoms may indicate a serious condition. Seek medical attention
                      promptly.</p>
                  </div>
                  <div className=".info-card-final">
                    <div className="card-icon advice">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5B6FE0" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" />
                        <path d="M3 10h18M8 2v4M16 2v4" />
                      </svg>
                    </div>
                    <h3>Advice</h3>
                    <ul className="check-list">
                      <li><span className="check-box b"><svg width="9" height="9" viewBox="0 0 24 24" fill="none"
                        stroke="#5B6FE0" strokeWidth="3">
                        <path d="M20 6 9 17l-5-5" />
                      </svg></span>Avoid eating or drinking until assessed</li>
                      <li><span className="check-box b"><svg width="9" height="9" viewBox="0 0 24 24" fill="none"
                        stroke="#5B6FE0" strokeWidth="3">
                        <path d="M20 6 9 17l-5-5" />
                      </svg></span>Do not take pain relievers that could mask worsening symptoms</li>
                      <li><span className="check-box b"><svg width="9" height="9" viewBox="0 0 24 24" fill="none"
                        stroke="#5B6FE0" strokeWidth="3">
                        <path d="M20 6 9 17l-5-5" />
                      </svg></span>Go to an emergency room if pain is sudden, severe, or paired with fever</li>
                      <li><span className="check-box b"><svg width="9" height="9" viewBox="0 0 24 24" fill="none"
                        stroke="#5B6FE0" strokeWidth="3">
                        <path d="M20 6 9 17l-5-5" />
                      </svg></span>Track when the pain started and what makes it worse</li>
                    </ul>
                  </div>
                  <div className=".info-card-final">
                    <div className="card-icon doctor">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D763A6" strokeWidth="2">
                        <circle cx="12" cy="8" r="4" />
                        <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" />
                      </svg>
                    </div>
                    <h3>Recommended Doctor</h3>
                    <ul className="check-list">
                      <li><span className="check-box p"><svg width="9" height="9" viewBox="0 0 24 24" fill="none"
                        stroke="#D763A6" strokeWidth="3">
                        <path d="M20 6 9 17l-5-5" />
                      </svg></span>Emergency Care / General Surgeon</li>
                    </ul>
                  </div>
                </div>
              </div>
            </details>
            <details className="history-entry">
              <summary>
                <div className="entry-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1FA24A" strokeWidth="2">
                    <path d="M12 2 3 6v6c0 5 3.8 8.7 9 10 5.2-1.3 9-5 9-10V6l-9-4Z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <div className="entry-main">
                  <p className="entry-query">Mild headache and eye strain after long screen time</p>
                  <div className="entry-sub"><span>3 days ago</span><span className="dot"></span><span>10:05 PM</span></div>
                </div>
                <span className="severity-pill mild">Mild</span>
                <svg className="chev" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </summary>
              <div className="entry-panel">
                <div className="card-grid">
                  <div className=".info-card-final">
                    <div className="card-icon causes">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1FA24A" strokeWidth="2">
                        <circle cx="12" cy="12" r="4" />
                        <path
                          d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" />
                      </svg>
                    </div>
                    <h3>Possible Causes</h3>
                    <ul className="check-list">
                      <li><span className="check-box g"><svg width="9" height="9" viewBox="0 0 24 24" fill="none"
                        stroke="#1FA24A" strokeWidth="3">
                        <path d="M20 6 9 17l-5-5" />
                      </svg></span>Digital eye strain</li>
                      <li>Tension headache</li>
                      <li><span className="check-box g"><svg width="9" height="9" viewBox="0 0 24 24" fill="none"
                        stroke="#1FA24A" strokeWidth="3">
                        <path d="M20 6 9 17l-5-5" />
                      </svg></span>Dehydration</li>
                      <li><span className="check-box g"><svg width="9" height="9" viewBox="0 0 24 24" fill="none"
                        stroke="#1FA24A" strokeWidth="3">
                        <path d="M20 6 9 17l-5-5" />
                      </svg></span>Poor lighting or posture</li>
                    </ul>
                  </div>
                  <div className=".info-card-final">
                    <div className="card-icon severity">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E8952E" strokeWidth="2">
                        <path d="M12 2 3 6v6c0 5 3.8 8.7 9 10 5.2-1.3 9-5 9-10V6l-9-4Z" />
                      </svg>
                    </div>
                    <h3>Severity</h3>
                    <span className="severity-tag mild">Mild</span>
                    <p className="severity-note">Your symptoms indicate a mild severity, likely tied to screen exposure and
                      posture.</p>
                  </div>
                  <div className=".info-card-final">
                    <div className="card-icon advice">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5B6FE0" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" />
                        <path d="M3 10h18M8 2v4M16 2v4" />
                      </svg>
                    </div>
                    <h3>Advice</h3>
                    <ul className="check-list">
                      <li><span className="check-box b"><svg width="9" height="9" viewBox="0 0 24 24" fill="none"
                        stroke="#5B6FE0" strokeWidth="3">
                        <path d="M20 6 9 17l-5-5" />
                      </svg></span>Follow the 20-20-20 rule for screen breaks</li>
                      <li><span className="check-box b"><svg width="9" height="9" viewBox="0 0 24 24" fill="none"
                        stroke="#5B6FE0" strokeWidth="3">
                        <path d="M20 6 9 17l-5-5" />
                      </svg></span>Stay hydrated throughout the day</li>
                      <li><span className="check-box b"><svg width="9" height="9" viewBox="0 0 24 24" fill="none"
                        stroke="#5B6FE0" strokeWidth="3">
                        <path d="M20 6 9 17l-5-5" />
                      </svg></span>Adjust screen brightness and reduce glare</li>
                      <li><span className="check-box b"><svg width="9" height="9" viewBox="0 0 24 24" fill="none"
                        stroke="#5B6FE0" strokeWidth="3">
                        <path d="M20 6 9 17l-5-5" />
                      </svg></span>Stretch your neck and shoulders regularly</li>
                    </ul>
                  </div>
                  <div className=".info-card-final">
                    <div className="card-icon doctor">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D763A6" strokeWidth="2">
                        <circle cx="12" cy="8" r="4" />
                        <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" />
                      </svg>
                    </div>
                    <h3>Recommended Doctor</h3>
                    <ul className="check-list">
                      <li><span className="check-box p"><svg width="9" height="9" viewBox="0 0 24 24" fill="none"
                        stroke="#D763A6" strokeWidth="3">
                        <path d="M20 6 9 17l-5-5" />
                      </svg></span>Optometrist</li>
                    </ul>
                  </div>
                </div>
              </div>
            </details> */}
        </div>
      </div>
    </>
  );
}