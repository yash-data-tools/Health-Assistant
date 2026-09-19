import { useState } from "react";
import { Sidebar } from "./component/Sidebar";
import { useTheme } from "./context/ThemeContext";
import "./styles/about.css";

export function About() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const leaders = [
    {
      name: "Yash Kumar Shaw",
      role: "Project Leader",
      specialties: "React, C Module, Python, Flask, SQLite3, AI Integration, CSS Architecture",
      icon: "👑"
    },
    {
      name: "Raid Md",
      role: "Project Leader",
      specialties: "Python, Flask Backend Architecture, SQLite3 Database Engine",
      icon: "⚡"
    }
  ];

  const teamMembers = [
    {
      name: "Zaid Siddiqui",
      role: "Backend Engineer",
      specialty: "Flask REST APIs & Server Routing",
      badge: "Backend"
    },
    {
      name: "Soumadip Mondol",
      role: "UI/UX & CSS Specialist",
      specialty: "Stylesheets, Design Tokens & Visual Hierarchy",
      badge: "Design"
    },
    {
      name: "Anjishnu Ghosh",
      role: "Database & Python Engineer",
      specialty: "SQLite3 Architecture & Query Optimization",
      badge: "Database"
    },
    {
      name: "Swastika Kar",
      role: "Frontend Developer",
      specialty: "HTML & CSS — BMI Calculator Module",
      badge: "Frontend"
    },
    {
      name: "Biswapriya Chandra",
      role: "Database & Python Developer",
      specialty: "Data Pipelines, Python Services & Schema Design",
      badge: "Database"
    },
    {
      name: "Ritoja Roy",
      role: "Frontend Developer",
      specialty: "HTML & CSS — Consultation History Module",
      badge: "Frontend"
    },
    {
      name: "Assafi Akhtar Biswas",
      role: "Frontend & QA Engineer",
      specialty: "Cross-Device Testing & UI Refinements",
      badge: "Testing"
    },
    {
      name: "Abhigyan Roy",
      role: "Research & Verification",
      specialty: "Medical Workflow Research & API Validations",
      badge: "Research"
    },
    {
      name: "Shreya Dey",
      role: "Frontend Developer",
      specialty: "JavaScript Logic & React UI Components",
      badge: "Frontend"
    },
    {
      name: "Sakshi Das",
      role: "Frontend Developer",
      specialty: "HTML & CSS — Disclaimer, Footer & Shared Components",
      badge: "Frontend"
    }
  ];

  const features = [
    {
      icon: "🤖",
      title: "AI Symptom Analysis",
      desc: "Analyzes patient-reported symptoms via Gemini AI, returning potential causes, structured triage, and severity grading."
    },
    {
      icon: "📊",
      title: "High-Performance BMI",
      desc: "Blends modern web reactivity with native C programming algorithms to compute body mass index and health categories."
    },
    {
      icon: "🩺",
      title: "Specialist Recommendations",
      desc: "Intelligently recommends the relevant medical doctor specialty based on symptom severity and physiological indicators."
    },
    {
      icon: "🗂️",
      title: "Consultation History",
      desc: "Persists patient checks into an encrypted local SQLite3 store via Flask REST endpoints for historical tracking."
    }
  ];

  const techStack = [
    { name: "React 19", role: "Frontend UI Library" },
    { name: "Vite", role: "Build & Bundling" },
    { name: "Python / Flask", role: "Backend REST API" },
    { name: "SQLite3", role: "Relational Storage" },
    { name: "C Programming", role: "Native Algorithmic Core" },
    { name: "Google Gemini AI", role: "Medical Intelligence Engine" }
  ];

  return (
    <>
      <Sidebar isMobileOpen={isMobileOpen} setIsMobileOpen={setIsMobileOpen} />

      <div className="about-container main-page">
        {/* Header Bar */}
        <header className="about-header">
          <div className="about-header-left">
            <button
              className="mobile-menu-btn"
              onClick={() => setIsMobileOpen(true)}
              aria-label="Open navigation menu"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div>
              <h1>About Health Assistant AI</h1>
              <p className="about-subtitle">The mission, engineering, and student team behind the application</p>
            </div>
          </div>

          <button
            className="light-dark-mode about-theme-toggle"
            onClick={toggleTheme}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <img src="images/light_mode.png" alt="Light mode" className="theme-toggle-img" />
            ) : (
              <img src="images/dark-mode.png" alt="Dark mode" className="theme-toggle-img" />
            )}
          </button>
        </header>

        <main className="about-content">
          {/* Hero Section with Visual Artwork */}
          <section className="about-hero-card">
            <div className="about-hero-grid">
              <div className="about-hero-text">
                <span className="about-pill">Student Innovation Project</span>
                <h2>Empowering Health Literacy Through Intelligent AI</h2>
                <p>
                  <strong>Health Assistant AI</strong> is an educational healthcare consultation web application created as a first-semester collaborative team project. Our goal is to make initial health self-screening accessible, reassuring, and intuitive for everyone.
                </p>
                <div className="hero-stats">
                  <div className="stat-box">
                    <span className="stat-num">12</span>
                    <span className="stat-label">Team Members</span>
                  </div>
                  <div className="stat-box">
                    <span className="stat-num">6+</span>
                    <span className="stat-label">Technologies</span>
                  </div>
                  <div className="stat-box">
                    <span className="stat-num">100%</span>
                    <span className="stat-label">Collaborative</span>
                  </div>
                </div>
              </div>

              <div className="about-hero-image-wrapper">
                <img
                  src="images/about_hero.jpg"
                  alt="Medical Research and Team Collaboration"
                  className="about-hero-img"
                />
              </div>
            </div>
          </section>

          {/* Project Purpose & Architecture */}
          <section className="about-section">
            <div className="section-title-wrapper">
              <span className="section-icon">💡</span>
              <div>
                <h2>What the Project Accomplishes</h2>
                <p className="section-subtitle">Bridging modern web engineering with healthcare insights</p>
              </div>
            </div>

            <div className="features-grid">
              {features.map((feat, index) => (
                <div key={index} className="feature-card">
                  <div className="feature-icon">{feat.icon}</div>
                  <h3>{feat.title}</h3>
                  <p>{feat.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Project Leadership */}
          <section className="about-section">
            <div className="section-title-wrapper">
              <span className="section-icon">👥</span>
              <div>
                <h2>Project Leadership</h2>
                <p className="section-subtitle">Architects guiding engineering, system design, and execution</p>
              </div>
            </div>

            <div className="leaders-grid">
              {leaders.map((leader, index) => (
                <div key={index} className="leader-card">
                  <div className="leader-card-header">
                    <div className="leader-avatar">
                      {leader.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <div className="leader-badge-pill">{leader.icon} {leader.role}</div>
                      <h3 className="leader-name">{leader.name}</h3>
                    </div>
                  </div>
                  <p className="leader-desc"><strong>Key Focus:</strong> {leader.specialties}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Development Team */}
          <section className="about-section">
            <div className="section-title-wrapper">
              <span className="section-icon">🤝</span>
              <div>
                <h2>Contributors & Development Team</h2>
                <p className="section-subtitle">The dedicated team members who researched, designed, and built each module</p>
              </div>
            </div>

            <div className="team-grid">
              {teamMembers.map((member, index) => {
                const initials = member.name.split(" ").map(n => n[0]).join("").slice(0, 2);
                return (
                  <div key={index} className="team-card">
                    <div className="team-card-top">
                      <div className="team-avatar">{initials}</div>
                      <span className={`role-badge ${member.badge.toLowerCase()}`}>{member.badge}</span>
                    </div>
                    <h4 className="member-name">{member.name}</h4>
                    <span className="member-role">{member.role}</span>
                    <p className="member-specialty">{member.specialty}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Technologies Used */}
          <section className="about-section">
            <div className="section-title-wrapper">
              <span className="section-icon">🛠️</span>
              <div>
                <h2>Technology Stack</h2>
                <p className="section-subtitle">Built with modern, cross-platform technologies</p>
              </div>
            </div>

            <div className="tech-grid">
              {techStack.map((tech, index) => (
                <div key={index} className="tech-card">
                  <span className="tech-name">{tech.name}</span>
                  <span className="tech-role">{tech.role}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Educational Disclaimer Notice */}
          <section className="about-disclaimer-card">
            <div className="disclaimer-header">
              <span className="disclaimer-icon">⚠️</span>
              <h3>Educational Project Disclaimer</h3>
            </div>
            <p>
              This application was built as an academic collaboration and is strictly intended for educational exploration, informational assistance, and technology demonstration. It does not replace professional medical advice, clinical diagnosis, or medical emergency care. If you experience severe or worsening health symptoms, please consult a licensed healthcare professional immediately.
            </p>
          </section>
        </main>
      </div>
    </>
  );
}
