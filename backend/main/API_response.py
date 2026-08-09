from dotenv import load_dotenv
import os
from google import genai

# load .env file 
load_dotenv()

# get api key 
api_key = os.getenv("GOOGLE_API_KEY")

# create gemini alient 
client  = genai.Client(api_key=api_key)

def Api(symptoms):

  prompt = f'''
  You are an AI Health Assistant.

  Patient symptomps:

  {symptoms}

  Return only JSON in this format:
  {{
  "possibleCauses":[],
  "severity":"Mild or Moderate or Severe",
  "advice":[],
  "doctor":"",
  "replied":"success or failure"
  }}

  Do not write anything except valid json given in the json above.
  If the question is valid write success in result but if invalid question write failure.
  '''

  # ask
  try:
    response = client.models.generate_content(
      model="gemini-3.1-flash-lite",

      # gemini-2.5-pro 
      # Gemini 3.1 Flash Lite
      # gemini-2.0-flash
      # gemini-3.5-flash
      contents=prompt
  )
    print("\n\nGemini called\n\n")
    return response.text
  except Exception as e:
    print(f"Error occurred while calling Gemini API: {e}")
    return '''
      {
  "possibleCauses":["Common cold","Flu","Allergies"],
  "severity":"Low",
  "advice":["Drink plenty of fluids","Rest","Take over-the-counter medications"],
  "doctor":"General Practitioner",
  "api-error":"Error occurred while processing the request. Please try again later."
  }

'''

# for model in client.models.list():
#     print(model.name, model.supported_actions)