import spotipy
from spotipy.oauth2 import SpotifyOAuth

sp = spotipy.Spotify(auth_manager=SpotifyOAuth(client_id='ef99958a61dc48ae90da5e2d54eb6084', client_secret='eeef9b2ed97e405bbdd7bc57dd64d0dd', redirect_uri='your_redirect_uri', scope=['user-library-read', 'playlist-read-private']))