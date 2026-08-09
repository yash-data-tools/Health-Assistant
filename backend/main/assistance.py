from flask import Blueprint, request 
import main.API_response as API_response
import main.insertRetrieveData as insertRetrieveData
import json

assistant_bp = Blueprint("assistant",__name__)




@assistant_bp.route("/api/responses", methods=["POST"])
def PostResponse():
  data = request.get_json()
  symptoms = data["symptoms"]
  if not symptoms:
    response = {
      "error": "Symptoms field is required."
    }
    return response
  response = API_response.Api(symptoms)
  data_dict = json.loads(response)
  data_dict["Symptoms"] = symptoms
  if ("api-error" not in data_dict) and (data_dict["replied"] != "failure"):
    insertRetrieveData.insert_into_search(json.dumps(data_dict, indent=4))

  return response

@assistant_bp.route("/api/results")
def GetResult():
  result = []
  history = insertRetrieveData.get_from_search()
  for row in history:
    result.append({
      "id":row[0],
      "data":json.loads(row[1])
    })
  return result
  