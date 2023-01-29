import "../App.css";
import { useState } from "react";
import { Grid } from "@mui/material";
import GenericButton from "../components/GenericButton";
import { TextField } from "@mui/material";
import usePlacesService from "react-google-autocomplete/lib/usePlacesAutocompleteService";
import { useEffect } from "react";
import useGoogle from "react-google-autocomplete/lib/usePlacesAutocompleteService";

export default function DestinationPage() {
  const [addresses, setAddresses] = useState([]);
  const {
    placesService,
    placePredictions,
    getPlacePredictions,
    isPlacePredictionsLoading,
  } = usePlacesService({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });

  useEffect(() => {
    // fetch place details for the first element in placePredictions array
    if (placePredictions.length)
      placesService?.getDetails(
        {
          placeId: placePredictions[0].place_id,
        }
        // (placeDetails) => savePlaceDetailsToState(placeDetails)
      );
  }, [placePredictions]);

  return (
    <div className="grid-container center-font">
      <div className="grid-item">
        <TextField id="outlined-basic" label="Start" variant="outlined" />
        {/* <Input.Search
          style={{ color: "black" }}
          value={value}
          placeholder="Debounce 500 ms"
          onChange={(evt) => {
            getPlacePredictions({ input: evt.target.value });
            setValue(evt.target.value);
          }}
          loading={isPlacePredictionsLoading}
        /> */}
      </div>
      <div className="grid-item">
        <TextField id="outlined-basic" label="Destination" variant="outlined" />
      </div>
      <div className="grid-item">
        <GenericButton
          className="grid-item"
          href={"http://localhost:3000/selection"}
          text={"New Playlist"}
        />
      </div>
    </div>
  );
}
