import "../App.css";
import { useState } from "react";
import { Grid } from "@mui/material";
import GenericButton from "../components/GenericButton";
import { TextField } from "@mui/material";
import usePlacesService from "react-google-autocomplete/lib/usePlacesAutocompleteService";
import { useEffect } from "react";
import useGoogle from "react-google-autocomplete/lib/usePlacesAutocompleteService";
import SearchBar from "../components/AutoComplete";

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
        <GenericButton
          className="grid-item"
          // href={"http://localhost:3000/selection"}
          text={"New Playlist"}
          // onChange={}
        />
      </div>
    </div>
  );
}
