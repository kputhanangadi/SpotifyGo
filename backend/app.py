from flask import Flask, request, url_for, session, redirect
import os
from dotenv import load_dotenv

load_dotenv()

import spotipy
from spotipy.oauth2 import SpotifyOAuth

app = Flask(__name__)

app.secret_key = 'imgonnakmscauseihatecoding'
app.config['SESSION_COOKIE_NAME'] = 'spotify-login-session'

@app.route('/')
def login():
    sp_ouath = create_spotify_oauth()
    auth_url = sp_ouath.get_authorize_url()
    return redirect(auth_url)

@app.route('/redirect')
def redirectPage():
    return "redirect"

@app.route('/getTracks')
def getTracks():
    return "songs"


def create_spotify_oauth():
    return SpotifyOAuth(
        client_id= os.getenv("client_id"),
        client_secret=os.getenv("secret"),
        redirect_uri=url_for('redirectPage', _external=True),
        scope = "playlist-modify-public, playlist-modify-private, user-library-modify"
)