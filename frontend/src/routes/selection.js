import {
  Grid,
  Checkbox,
  FormControl,
  Paper,
  FormGroup,
  Box,
  Typography,
} from "@mui/material";
import "../css/selection.css";
import "../App.css";

function handleCheck() {}

const Check = (props) => {
  return <Checkbox className="table-margin" onClick={handleCheck}></Checkbox>;
};

const Title = (props) => {
  return (
    <Paper
      className="table-margin text-overflow-ellipsis"
      sx={{ backgroundColor: "red" }}
    >
      <Typography className="text-overflow-ellipsis" noWrap>
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
      gridTemplateColumns="1fr 6.6fr 3fr"
      gridAutoFlow="row"
      justifyContent="center"
      alignItems="center"
    >
      <Check />
      <Title title={props.title} />
      <Box component="img" alt={"Spotify album image"} src={props.image} />
    </Grid>
  );
};

export default function SelectionGrid(props) {
  return (
    <div className="header center-font margin-top selectionBox">
      <Row image={""} title={"title"} />
      <Row image={""} title={"title"} />
      <Row />
      <Row />
      <Row />
    </div>
  );
}
