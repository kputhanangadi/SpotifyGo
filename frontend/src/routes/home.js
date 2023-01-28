import "../App.css";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

export default function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <Title />
        <div className="flex-grow-med" />
      </header>
      {/* <div className="flex-grow-small" /> */}
      <Divider
        // variant="middle"
        flexItem="true"
        className="divider"
        textAlign="center"
        // absolute="true"
        sx={{
          borderBottomWidth: 5,
          borderColor: "#06D6A0",
          width: 0.25,
          marginLeft: "37.5%",
          marginRight: "37.5%",
        }}
      />
      <div className="Home-bottom">
        <PlaylistBtn />
      </div>
    </div>
  );
}

const LoginWebpge = () => {};

const DestnInptWebpge = () => {};

function Title(props) {
  return (
    <>
      <h1 className="bottom-margin-0">SpotifyGo</h1>
      <p>Never waste a moment</p>
    </>
  );
}

function PlaylistBtn(props) {
  return (
    <Button id="login-bt" variant="contained" href="https://google.com">
      Login to Spotify
    </Button>
  );
}

/*
const DestnInput = () => {
  return
  <form action="https://canvas.ubc.ca/">
    <input type="text" placeholder="Enter Destination!"></input>
  </form>
};
*/

const ChckBoxWebpge = () => {};

const NewPlaylistWebpge = () => {}; // May not need this as a separate webpage

// Make a function that shows an input form or textbox with current address
// make a input form for destination
// make a cool button
