const express = require("express");
const SpotifyWebApi = require("spotify-web-api-node");

const app = express();
const port = 5000;

const scopes = ["playlist-modify-public", "playlist-read-private"];
const redirectUri = "https://localhost:5000/callback";
const clientId = "cdbd0da95152406ca810c2076229b40b";
const state = "old";

// const code = "/callback";

const spotifyApi = new SpotifyWebApi({
  redirectUri: redirectUri,
  clientId: clientId,
});

app.get("/callback", function (req, res) {
  /* Read query parameters */
  var code = req.query.code; // Read the authorization code from the query parameters
  var state = req.query.state; // (Optional) Read the state from the query parameter
  console.log(code);

  /* Get the access token! */
  spotifyApi.authorizationCodeGrant(code).then(
    function (data) {
      console.log("The token expires in " + data["expires_in"]);
      console.log("The access token is " + data["access_token"]);
      console.log("The refresh token is " + data["refresh_token"]);

      /* Ok. We've got the access token!
         Save the access token for this user somewhere so that you can use it again.
         Cookie? Local storage?
      */
      spotifyApi.setAccessToken(data.body["access_token"]);

      /* Redirecting back to the main page! :-) */
      res.redirect("/");
    },
    function (err) {
      res.status(err.code);
      res.send(err.message);
    }
  );
});

// clientId, clientSecret and refreshToken has been set on the api object previous to this call.
// spotifyApi.refreshAccessToken().then(
//   function (data) {
//     console.log("The access token has been refreshed!");

//     // Save the access token so that it's used in future calls
//     spotifyApi.setAccessToken(data.body["access_token"]);
//   },
//   function (err) {
//     console.log("Could not refresh access token", err);
//   }
// );

const authorizeURL = spotifyApi.createAuthorizeURL(scopes, state);
console.log(authorizeURL);

// TODO: setup express API for callback and then authorize for user playlists and then create and then pull data
app.listen(port);
