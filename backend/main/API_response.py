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
  "severity":"",
  "advice":[],
  "doctor":""
  }}

  Do not write anything except valid json given in the json above.
  '''

  # ask

  response = client.models.generate_content(
    model="gemini-3.5-flash",

    # gemini-2.5-pro 
    # Gemini 3.1 Flash Lite
    # gemini-2.0-flash
    # gemini-3.5-flash
    contents=prompt
)
  return response.text


# for model in client.models.list():
#   print(model.name)