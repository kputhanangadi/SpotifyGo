import "../App.css";
import { useState } from "react";
import { Grid } from "@mui/material";
import GenericButton from "../components/GenericButton";
import SearchBar from "../components/AutoComplete";
import { Link } from "react-router-dom";

export default function DestinationPage() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  const handleGetOrigin = (place) => {
    setOrigin(place);
  };

  const handleGetDestination = (place) => {
    setDestination(place);
  };

  return (
    <div className="grid-container center-font">
      <div className="grid-item">
        <SearchBar getPlaceFunc={handleGetOrigin} location={"Start"} />
      </div>
      <div className="grid-item">
        <SearchBar getPlaceFunc={handleGetDestination} location={"End"} />
      </div>
      <div className="grid-item">
        <Link to="/selection">
          <GenericButton
            className="grid-item"
            text={"New Playlist"}
            onChange={async () => {
              await fetch("http://localhost:5000/locations", {
                body: JSON.stringify({ origin: origin, destination: destination }),
              });
            }}
          />
        </Link>
      </div>
  );
}
