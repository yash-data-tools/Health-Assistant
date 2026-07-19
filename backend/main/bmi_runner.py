import subprocess
import os
from flask import Blueprint, request

bmi_bp = Blueprint("bmi",__name__)

def runBMI(height, weight):
  print(os.path.dirname(__file__))

  exe_path = os.path.abspath(os.path.join(os.path.dirname(__file__),"..","c_module","bmi_calculator.exe"))
  print(exe_path)
  result = subprocess.run(
    [exe_path,str(height),str(weight)],
    capture_output=True,
    text=True
  )

  return result.stdout

@bmi_bp.route("/api/bmi", methods=["POST"])
def calculate():
  data = request.get_json()
  height = data["height"]
  weight = data["weight"]
  age = data["age"]

  bmi = runBMI(height, weight)
  condition = {
    "underweight":["You are below the normal weight range.","Consider a nutrition plan to gain weight and maintain a healthy lifestyle."],
    "normal": ["You have a normal body weight.","Great job maintaining the healthy lifestyle."],
    "overweight":["You are above the normal weight range.","Regular exercise and a balanced diet can help you reach a healthier weight."],
    "obese":["Your BMI indicates obesity.","Consult a healthcare professional for guidance on weight management and overall health."],
    "severely obese":["Your BMI indicates severe obesity.","Seeking medical advice can help you improve your long-term health."]
  }

  if(float(bmi) < 18.5):
    final_condition = condition["underweight"]
    check = "Underweight"
  elif(float(bmi) >= 18.5 and float(bmi) < 25):
    final_condition = condition["normal"]
    check = "Normal"
  elif(float(bmi) >= 25 and float(bmi) < 30):
    final_condition = condition["overweight"]
    check = "Overweight"
  elif(float(bmi) >= 30 and float(bmi) < 35):
    final_condition = condition["obese"]
    check = "Obese"
  else:
    final_condition = condition["severely obese"]
    check = "Severely obese"

  return ({
    "result":bmi,
    "age":age,
    "height":height,
    "weight":weight,
    "define":final_condition,
    "check":check
  })
