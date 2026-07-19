from flask import Flask
from flask_cors import CORS
from main.assistance import assistant_bp
from main.bmi_runner import bmi_bp

app = Flask(__name__)

app.register_blueprint(assistant_bp)
app.register_blueprint(bmi_bp)
CORS(app, origins=["http://localhost:5173"])

if __name__ == "__main__":
  app.run(debug=True)