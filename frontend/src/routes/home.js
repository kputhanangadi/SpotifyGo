import "../App.css";
import GenericButton from "../components/GenericButton";
import Divider from "@mui/material/Divider";

const port = "http://localhost:5000";

export default function Home() {
  return (
    <div className="center-font">
      <header className="Home-color header home-height">
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
          borderColor: "#13bd90",
          width: 0.25,
          marginLeft: "37.5%",
          marginRight: "37.5%",
        }}
      />
      <div className="Home-bottom">
        <GenericButton href={`${port}/login`} text={"Login to Spotify"} />
      </div>
    </div>
  );
}

function Title(props) {
  return (
    <>
      <h1 className="bottom-margin-0">SpotifyGo</h1>
      <p>
        <b>
          <i>Never waste a moment</i>
        </b>
      </p>
    </>
  );
}
