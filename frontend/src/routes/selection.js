import { Grid, Checkbox, Paper, Box, Typography } from "@mui/material";
import "../css/selection.css";
import "../App.css";
import GenericButton from "../components/GenericButton";
import { useState } from "react";

export default function SelectionGrid(props) {
  const [playlists, setPlaylists] = useState(["", "", "", "", ""]);
  const [checked, setChecked] = useState([false, false, false, false, false]);

  const Check = (props) => {
    return (
      <Checkbox
        className="table-margin"
        onChange={() => {
          const newPlaylists = [...playlists];
          let elem = newPlaylists[props.num];
          if (elem === "") {
            newPlaylists[props.num] = props.playlist;
          } else {
            newPlaylists[props.num] = "";
          }
          setPlaylists(newPlaylists);

          const newChecked = [...checked];
          newChecked[props.num] = !checked[props.num];
          setChecked(newChecked);
        }}
        checked={checked[props.num]}
      ></Checkbox>
    );
  };

  const Title = (props) => {
    return (
      <Paper elevation={0} className="table-margin " sx={{ backgroundColor: "inherit" }}>
        <Typography sx={{ color: "white" }} noWrap>
          {props.title}
        </Typography>
      </Paper>
    );
  };

  // accepts props.image --> image link, props.title --> playlist title
  const Row = (props) => {
    return (
      <Grid
        sx={{ width: 0.6 }}
        display="grid"
        className="width50"
        gridTemplateColumns="0.4fr 6.6fr 3fr"
        gridAutoFlow="row"
        justifyContent="center"
        alignItems="center"
      >
        <Check playlist={props.playlist} num={props.num} />
        <Title title={props.title} />
        <Box component="img" alt={"Spotify album image"} src={props.image} />
        {/* TODO: make box scale with larger image? */}
      </Grid>
    );
  };
  return (
    <>
      <div className="header center-font margin-top selection-box flex">
        <h2>Select the playlists you want to curate from!</h2>
        <Row image={""} title={"title"} playlist={"linkhere"} num={0} />
        <Row image={""} title={"title"} playlist={"button2"} num={1} />
        <Row num={2} />
        <Row num={3} />
        <Row num={4} />
        {/* TODO: href, onChange method*/}
      </div>
      <h2>{playlists}</h2>
      <div className="margin-top header flex center-font">
        <GenericButton text={"Generate Playlist!"} href={""} onChange={"hi"} />
      </div>
    </>
  );
}
