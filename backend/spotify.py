import spotipy
from spotipy.oauth2 import SpotifyOAuth

sp = spotipy.Spotify(auth_manager=SpotifyOAuth(client_id='ef99958a61dc48ae90da5e2d54eb6084', client_secret='eeef9b2ed97e405bbdd7bc57dd64d0dd', redirect_uri='https://SpotifyGo.com/callback/', scope=['user-library-read', 'playlist-read-private']))

# end points
results = sp.current_playback()

#-------------------------USEFUL CALLS-------------------------#
# Current Info
user_info = sp.current_user()

# Top artists
top_artists = sp.current_user_top_artists()

# New Playlist
new_playlist = sp.user_playlist_create('spotify', 'My new playlist')

# Add Track to Playlist
sp.user_playlist_add_tracks('spotify', '5ieJqeLJjjI8iJWaxeBLuK', ['3Qm86XLflmIXVm1wcwkgDK'])

# Retrive Playlist
playlists = sp.user_playlists('spotify')

# Search for tracks
search_results = sp.search(q='artist:queen', type='track')
