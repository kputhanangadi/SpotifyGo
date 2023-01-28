import requests
import smtplib
from dotenv import load_dotenv
import os

load_dotenv()

# API KEY
google_api_key = os.getenv("googlekey")

# home address
home_address = ['New York, NY'] # ("Enter a Home adress:\n")

# work address
work_address = ['Washington, DC'] # input("Enter a Work adress:\n")

# base url
google_url = "https://maps.googleapis.com/maps/api/distancematrix/json?"

# get response
r = requests.get(google_url + "origins=" + home_address + "&destinations=" + work_address + "&key=" + google_api_key)

#return time as text in seconds
time = r.json()["rows"][0]["elements"][0]["duration"]["text"]
seconds = r.json()["rows"][0]["elements"][0]["duration"]["value"]

# print the total travel time
print("\nTotal travel time: " + time)