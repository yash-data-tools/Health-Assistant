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
  return ({
    "result":bmi,
    "age":age,
    "height":height,
    "weight":weight
  })
