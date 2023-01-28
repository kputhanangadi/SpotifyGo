import requests
import smtplib
from dotenv import load_dotenv
import os

load_dotenv()

# API KEY

google_api_key = os.getenv("googlekey")

# home address
home_address = input("Enter a Home adress:\n")

# work address
work_address = input("Enter a Work adress:\n")

# base url
url = "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&?"

# get response
r = requests.get(url + "origins=" + home_address + "&destinations=" + work_address + "&key=" + google_api_key)

#return time as text in seconds
time = r.json()["rows"][0]["elements"][0]["duration"]["text"]
seconds = r.json()["rows"][0]["elements"][0]["duration"]["value"]

# print the total travel time
print("\nTotal travel time: " + time)