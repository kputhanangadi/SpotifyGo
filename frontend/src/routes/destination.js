import "../App.css";
import { useState } from "react";
import { Grid } from "@mui/material";
import GenericButton from "../components/GenericButton";
// import AutoComplete from "../components/AutoComplete";
import { TextField } from "@mui/material";
// import Autocomplete from "react-google-autocomplete";
import AutoComplete from "../components/AutoComplete";

export default function DestinationPage() {
  const [addresses, setAddresses] = useState([]);

  return (
    <div className="grid-container center-font">
      <div className="grid-item">
        <TextField id="outlined-basic" label="Start" variant="outlined" />
        {/* <Autocomplete
          apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
          onPlaceSelected={(place) => console.log(place)}
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
