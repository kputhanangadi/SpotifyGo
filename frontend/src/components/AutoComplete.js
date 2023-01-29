import React from "react";
import { TextField } from "@mui/material";
/* global google */

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.location = props.location;
    this.autocompleteInput = React.createRef();
    this.autocomplete = null;
    this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
    this.place = "";
  }

  componentDidMount() {
    this.autocomplete = new google.maps.places.Autocomplete(
      this.autocompleteInput.current,
      { types: ["geocode"] }
    );

    this.autocomplete.addListener("place_changed", this.handlePlaceChanged);
  }

  handlePlaceChanged() {
    const place = this.autocomplete.getPlace();
    this.props.getPlaceFunc(place.formatted_address);
  }

  render() {
    return (
      <>
        <TextField
          id="autocomplete"
          inputRef={this.autocompleteInput}
          type="text"
          variant="outlined"
          sx={{ width: "15vw" }}
          label={this.location}
          // onChange={(event) => {
          //   this.text = event.target.value;
          //   console.log(this.text);
          // }}
        />
      </>
    );
  }
}
