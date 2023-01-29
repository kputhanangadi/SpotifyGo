import "../App.css";
import { Grid } from "@mui/material";
import GenericButton from "../components/GenericButton";
// import AutoComplete from "../components/AutoComplete";
import { TextField } from "@mui/material";

export default function DestinationPage() {
  return (
    <div className="grid-container center-font">
      <div className="grid-item">
        <TextField id="outlined-basic" label="Start" variant="outlined" />
      </div>
      <div className="grid-item">
        <TextField id="outlined-basic" label="Destination" variant="outlined" />
      </div>
      <div className="grid-item">
        <GenericButton className="grid-item"
          href={"http://localhost:3000/selection"}
          text={"New Playlist"}
        />
        {/* <button href={"http://localhost:3000/selection"} id="GenPL">
          NEW PLAYLIST
        </button> */}
      </div>
    </div>
  );
}

//   .Input-place {
//     border-radius: 10px;
//     width: 300px;
//     height: 50px;
//     font-size: 25px;
//     font-family: Arial;
//     letter-spacing: .15rem;
//     text-indent: 10px;
//   }
