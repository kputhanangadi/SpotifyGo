import { Grid, Checkbox, Paper, Box, Typography } from "@mui/material";
import "../css/selection.css";
import "../App.css";
import GenericButton from "../components/GenericButton";
import { useEffect, useState } from "react";

export default function SelectionGrid(props) {
  const [playlists, setPlaylists] = useState([
    { title: "", image: "", link: "", tracks: "" },
    { title: "", image: "", link: "", tracks: "" },
    { title: "", image: "", link: "", tracks: "" },
    { title: "", image: "", link: "", tracks: "" },
    { title: "", image: "", link: "", tracks: "" },
  ]);
  // const [playlists, setPlaylists] = useState(false);
  const [checked, setChecked] = useState([false, false, false, false, false]);

  const Check = (props) => {
    return (
      <Checkbox
        className="table-margin"
        onChange={() => {
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
        sx={{ width: 0.6, backgroundSize: "contain" }}
        display="grid"
        className="width50"
        gridTemplateColumns="0.4fr 6.6fr 3fr"
        gridAutoFlow="row"
        justifyContent="center"
        alignItems="center"
      >
        <Check num={props.num} />
        <Title title={props.title} />
        <Box component="img" alt={"Spotify album image"} src={props.image} />
        {/* TODO: make box scale with larger image? */}
      </Grid>
    );
  };

  useEffect(() => {
    fetch("http://localhost:5000/playlists")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        const newPlaylists = [...playlists];
        for (let [key, playlist] of Object.entries(data)) {
          for (let i = 0; i < playlist.length; i++) {
            // let playlist = playlist[i];
            // console.log(playlist);
            newPlaylists[i].title = data[i][0][1];
            newPlaylists[i].image = data[i][1][1];
            newPlaylists[i].link = data[i][2][1];
            newPlaylists[i].tracks = data[i][3][1];
          }
        }
        setPlaylists(newPlaylists);
      });
  }, []);

  return (
    <>
      <div className="header center-font margin-top selection-box flex">
        <h2>Select the playlists you want to curate from!</h2>
        <Row image={playlists[0].image} title={playlists[0].title} num={0} />
        <Row image={playlists[1].image} title={playlists[1].title} num={1} />
        <Row image={playlists[2].image} title={playlists[2].title} num={2} />
        <Row image={playlists[3].image} title={playlists[3].title} num={3} />
        <Row image={playlists[4].image} title={playlists[4].title} num={4} />
        {/* TODO: href, onChange method */}
      </div>
      <h2></h2>
      <div className="margin-top header flex center-font">
        <GenericButton text={"Generate Playlist!"} href={""} onChange={"hi"} />
      </div>
    </>
  );
}
