# 🩺 Health Assistant AI

An AI-powered health assistant web application built as a first-semester
team project using **React, JavaScript, HTML, CSS, Python, Flask,
SQLite3, C programming, and an AI API**.

> ⚠️ **Educational project only:** This application does not replace a
> qualified doctor or professional medical advice.

## 🚀 Features

-   🤖 AI-powered symptom analysis
-   💬 Natural-language health queries
-   📋 Structured AI health responses
-   ⚠️ Severity classification
-   🩺 Suggested doctor/specialist
-   💡 Health advice
-   📊 BMI calculator
-   🗂️ Consultation history
-   ℹ️ About and disclaimer pages
-   🗄️ SQLite3 database
-   🔌 Flask REST API
-   ⚛️ React frontend
-   🧮 C program integration for BMI calculation

## 🛠️ Technology Stack

**Frontend:** HTML, CSS, JavaScript, React

**Backend:** Python, Flask, SQLite3

**Other:** C, AI API, REST API, Git & GitHub

## 👥 Team

  -----------------------------------------------------------------------
  Member                              Responsibility
  ----------------------------------- -----------------------------------
  **Yash Shaw**                       JavaScript, React, C, Python,
                                      Flask, SQLite3, API integration,
                                      HTML, CSS

  **Zaid**                            Flask & Backend

  **Soumadip**                        CSS

  **Anjishnu**                        Python & SQLite3

  **Swastika**                        HTML & CSS --- BMI Calculator

  **Shreya**                          JavaScript basics & React

  **Shakshi**                         HTML & CSS --- Disclaimer, Footer &
                                      small components

  **Ritoja**                          HTML & CSS --- History Page

  
  -----------------------------------------------------------------------

### 🎯 Team Learning Goal

Nobody needs to master an entire technology before contributing. Each
member should learn enough to **understand, build, modify, test, and
explain** the part they are responsible for.

## 📁 Project Structure

``` text
health-assistant-ai/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
├── backend/
│   ├── app.py
│   ├── database.py
│   ├── routes/
│   ├── services/
│   ├── bmi/
│   └── requirements.txt
├── database/
├── README.md
└── .gitignore
```

> The structure may change as development continues.

## 💻 Installation

Clone the repository:

``` bash
git clone <REPOSITORY-URL>
cd health-assistant-ai
```

### Backend

``` bash
cd backend
python -m venv venv
```

Windows:

``` bash
venv\Scripts\activate
```

Linux/macOS:

``` bash
source venv/bin/activate
```

Install dependencies:

``` bash
pip install -r requirements.txt
```

Run Flask:

``` bash
python app.py
```

### Frontend

Open another terminal:

``` bash
cd frontend
npm install
npm run dev
```

The terminal will show the local React/Vite URL.

## 🔐 Environment Variables

Never upload API keys to GitHub.

Create a local `.env` file when required:

``` env
GEMINI_API_KEY=your_api_key_here
```

Add the following to `.gitignore`:

``` text
.env
venv/
__pycache__/
node_modules/
*.pyc
```

## 🔄 How It Works

``` text
User
  ↓
React Frontend
  ↓
Flask Backend
  ├──→ AI API → Health Analysis
  ├──→ C Program → BMI Calculation
  └──→ SQLite3 → Consultation History
```

For example, a user can enter:

``` text
I have a headache and fever.
```

The frontend sends the request to Flask. Flask communicates with the AI
API and receives structured information such as:

``` json
{
  "data": {
    "Symptoms": "headache and fever",
    "advice": [
      "Stay hydrated",
      "Take adequate rest"
    ],
    "doctor": "General Physician",
    "possibleCauses": [
      "Viral infection",
      "Tension headache"
    ],
    "severity": "Moderate"
  }
}
```

The result can then be displayed to the user and saved in SQLite for the
History page.

## 🗄️ Database

SQLite3 is used to store consultation results.

Possible fields include:

-   Consultation ID
-   Symptoms
-   AI response
-   Advice
-   Possible causes
-   Recommended doctor
-   Severity
-   Date/time

## 🔌 API

Example Flask endpoints:

``` text
POST /api/health
GET  /api/results
DELETE /api/results/<id>
POST /api/bmi
```

The exact endpoints may change during development.

## 🌿 Git & GitHub Workflow

Everyone should work on their own branch.

Create a branch:

``` bash
git checkout -b feature/your-name
```

Example:

``` bash
git checkout -b feature/ritoja-history
```

After making changes:

``` bash
git add .
git commit -m "Add history page UI"
git push origin feature/ritoja-history
```

Then open a **Pull Request** on GitHub.

### ⚠️ Do not directly push major changes to `main`.

The `main` branch should remain the stable version.

## 📌 Contribution Rules

Before coding:

1.  Pull the latest changes.
2.  Check what other members are working on.
3.  Create your own branch.
4.  Understand the existing code before changing it.

While coding:

-   Use meaningful names.
-   Keep code simple.
-   Don't unnecessarily rewrite another member's work.
-   Don't delete working code without discussing it.
-   Keep reusable components separate.
-   Ask when you don't understand something.

Before pushing:

-   Test your feature.
-   Make sure frontend and backend still run.
-   Check that existing features still work.
-   Remove debug code.
-   Never commit API keys, passwords, or `.env` files.

> If you don't understand something, ask before changing it. It's much
> better than accidentally breaking the backend and having everyone
> stare at the screen like **💀**.

## 🧪 Testing

Test multiple inputs, for example:

``` text
I have a headache.
```

``` text
I have fever and cough.
```

``` text
I have severe chest pain.
```

Check that the application:

-   Accepts input.
-   Returns a response.
-   Displays the response correctly.
-   Handles errors.
-   Saves history when appropriate.
-   Does not crash with unexpected input.

## 📚 Learning Plan

The team has approximately **2 months** to learn the required
technologies.

### 🟢 Easy

-   Basic HTML
-   Basic CSS
-   Required page/component design
-   Basic Git/GitHub

### 🟡 Normal

-   Python fundamentals
-   Flask routes
-   Request/response handling
-   SQLite3 basics
-   Frontend/backend communication

### 🔴 Hard

-   JavaScript fundamentals
-   React components
-   Props
-   State
-   Events
-   API requests
-   Basic project integration

You don't need to learn 100% of a technology. Learn what the project
needs first, then expand your knowledge.

## ⚠️ Medical Safety

This is an **educational software project**, not a medical diagnostic
system.

AI responses should not be presented as confirmed diagnoses. Users
should seek professional medical care for severe, worsening, or
potentially dangerous symptoms.

## 🎯 Project Goal

The goal is to learn how a real software project is developed as a team:

``` text
Learn
  ↓
Build
  ↓
Test
  ↓
Commit
  ↓
Pull Request
  ↓
Review
  ↓
Merge
  ↓
Improve
```

Everyone should understand their own contribution well enough to explain
it during the project presentation.

------------------------------------------------------------------------

## ❤️ Team

**Project Lead:** Yash Shaw

Built by a first-semester student team learning software development
together.

> **Learn together. Build together. Break things together. Fix them
> together. 🚀**
