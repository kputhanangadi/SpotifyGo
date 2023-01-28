import "../App.css";
import {Grid} from "@mui/material";

export default function DestinationPage() {
    return (
        <div class="grid-container">
            <div class="grid-item">Input or address</div>
            <div class="grid-item">
                <form type="text">
                    <input placeholder="Enter destination"></input>
                </form>
            </div>
            <div class="grid-item"><button id="GenPL">NEW PLAYLIST</button></div>
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