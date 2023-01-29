const express = require("express");
const SpotifyWebApi = require("spotify-web-api-node");
const request = require("request");
const cors = require("cors");
const querystring = require("querystring");
const cookieParser = require("cookie-parser");

require("dotenv").config();

const app = express();
app
  .use(express.static(__dirname + "/public"))
  .use(cors())
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

const spotifyApi = new SpotifyWebApi({
  redirectUri: redirectUri,
  clientId: clientId,
  clientSecret: clientSecret,
});

// ENDPOINTS:
app.get("/login", function (req, res) {
  // res.cookie(stateKey, state);

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
  const playlists = (await spotifyApi.getUserPlaylists()).body.items;
  // result.set(spotifyApi.getUser().then())
  var result = {};
  let count = 0;
  for (let playlist of playlists) {
    result[count++] = [
      ["title", playlist.name],
      ["image", playlist.images[0].url],
      ["link", playlist.external_urls.spotify],
      ["tracks", playlist.tracks.href],
    ];
    // result.push(m);
  }
  // var myObject = [];
  // let obj = {};
  // for (var key in myObject) {
  //   obj[key] = myObject[key];
  // }
  res.send(result);
  // res.redirect("http://localhost:3000/destination");
});

const authorizeURL = spotifyApi.createAuthorizeURL(scopes, state);
console.log(authorizeURL);

// TODO: setup express API for callback and then authorize for user playlists and then create and then pull data
console.log(`Listening on ${port}`);
app.listen(port);
