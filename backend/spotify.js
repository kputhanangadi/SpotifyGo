const express = require("express");
const SpotifyWebApi = require("spotify-web-api-node");
const request = require("request");
const cors = require("cors");
const querystring = require("querystring");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const parseUrl = require("parse-url");

require("dotenv").config();

const app = express();
app
  .use(express.static(__dirname + "/public"))
  .use(cors())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(cookieParser());
const port = 5000;

const scopes = [
  "playlist-modify-public",
  "playlists-modify-private",
  "playlist-read-private",
  "playlist-read-collaborative",
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];
const redirectUri = "http://localhost:5000/callback";
const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
const state = "test";
const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
var duration = 0;

const spotifyApi = new SpotifyWebApi({
  redirectUri: redirectUri,
  clientId: clientId,
  clientSecret: clientSecret,
});

// ENDPOINTS:
app.get("/login", function (req, res) {
  // your application requests authorization
  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id: clientId,
        scope: scopes,
        redirect_uri: redirectUri,
        state: state,
      })
  );
});

app.get("/callback", function (req, res) {
  /* Read query parameters */
  var code = req.query.code; // Read the authorization code from the query parameters
  var state = req.query.state; // (Optional) Read the state from the query parameter
  // var storedState = req.cookies ? req.cookies[stateKey] : null;

  /* Get the access token! */
  spotifyApi.authorizationCodeGrant(code).then(
    function (data) {
      console.log("The token expires in " + data.body["expires_in"]);
      console.log("The access token is " + data.body["access_token"]);
      console.log("The refresh token is " + data.body["refresh_token"]);

      /* Ok. We've got the access token!
         Save the access token for this user somewhere so that you can use it again.
         Cookie? Local storage?
      */
      spotifyApi.setAccessToken(data.body["access_token"]);

      /* Redirecting back to the main page! :-) */
      res.redirect("http://localhost:3000/destination");
    },
    function (err) {
      res.status(err.code);
      res.send(err.message);
    }
  );
});

app.get("/playlists", async function (req, res) {
  const playlists = await (await spotifyApi.getUserPlaylists()).body.items;

  var result = {};
  let count = 0;
  for (let playlist of playlists) {
    result[count++] = [
      ["title", playlist.name],
      ["image", playlist.images[0].url],
      ["link", playlist.external_urls.spotify],
      ["tracks", playlist.tracks.href],
    ];
  }
  res.send(result);
});

app.post("/locations", async function (req, res) {
  const origin = req.body.origin;
  const destination = req.body.destination;
  const url = `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin}&destinations=${destination}&key=${GOOGLE_API_KEY}`;

  const locationResponse = await fetch(url);
  if (locationResponse.ok) {
    const data = await locationResponse.json();
    try {
      duration = data.rows[0].elements[0].duration.value;
    } catch (e) {}
  }
  res.redirect("http://localhost:3000/selection");
});

app.post("/generate", async function (req, res) {
  const process = req.body;
  const links = [];
  const tracks = [];
  var mega_list = [];
  var time_to_destination = duration * 1000; // will be given to me
  var new_playlist = []; // array with tracks in new playlist
  var dup_set = new Set();
  for (let i = 0; i < process.length; i++) {
    const id = parseUrl(process[i].link).pathname.split("/")[2];
    links.push(id);
  }

  var offset = 0;

  for (let i = 0; i < links.length; i++) {
    var response = await spotifyApi.getPlaylistTracks(links[i], {
      offset: offset,
    });
    tracks.push(response.body.items);
    let nextLink = response.body.next;
    while (nextLink != null) {
      offset = offset + 100;
      response = await spotifyApi.getPlaylistTracks(links[i], {
        offset: offset,
      });
      tracks.push(response.body.items);
      nextLink = response.body.next;
    }
  }

  mega_list = tracks.flat();
  while (time_to_destination > 0) {
    var curr_index = getRandomInt(0, mega_list.length);
    if (!dup_set.has(mega_list[curr_index].track.id)) {
      new_playlist.push(`spotify:track:${mega_list[curr_index].track.id}`);
      time_to_destination -= mega_list[curr_index].track.duration_ms;
    }
  }

  const pl = await spotifyApi.createPlaylist("SpotifyGo");
  await spotifyApi.addTracksToPlaylist(pl.body.id, new_playlist);

  const imageURL = await (await spotifyApi.getPlaylist(pl.body.id)).body.images[0].url;

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  res.send(JSON.stringify(imageURL));
});

const authorizeURL = spotifyApi.createAuthorizeURL(scopes, state);
console.log(authorizeURL);

console.log(`Listening on ${port}`);
app.listen(port);
