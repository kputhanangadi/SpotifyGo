import "../App.css";
import { useState } from "react";
import { Grid } from "@mui/material";
import GenericButton from "../components/GenericButton";
import { TextField } from "@mui/material";
import { useEffect } from "react";

export default function DestinationPage() {

  // useEffect(() => {
  //   // fetch place details for the first element in placePredictions array
  //   if (placePredictions.length)
  //     placesService?.getDetails(
  //       {
  //         placeId: placePredictions[0].place_id,
  //       }
  //       // (placeDetails) => savePlaceDetailsToState(placeDetails)
  //     );
  // }, [placePredictions]);

  return (
    <div className="grid-container center-font">
      <div className="grid-item">
        <TextField id="filled-basic" label="Start" variant="filled" />
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
        <TextField id="filled-basic" label="Destination" variant="filled" />
      </div>
        <GenericButton
          className="grid-item"
          href={"http://localhost:3000/selection"}
          text={"New Playlist"}
        />
      </div>
  );
}
