import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";

export default function GeneratePage() {
  const location = useLocation();
  const [image, setImage] = useState("");

  useEffect(() => {
    const playlists = location.state.playlists;
    const checked = location.state.checked;
    const body = [];
    for (let i = 0; i < checked.length + 1; i++) {
      if (checked[i] === true) {
        body.push(playlists[i]);
      }
    }
    async function getData() {
      const response = await fetch("http://localhost:5000/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      if (response.ok) {
        const data = (await response).json();
        setImage(data.value);
      }
    }
    getData();
  }, []);
  return (
    <>
    <div className="gen-div">
    <h1 className="bottom-margin-0 gen-h1">You're Good To Go!</h1>
      <p className="gen-p">
        <b>
          (Check your Spotify account for: "SpotifyGo")
        </b>
      </p>
      </div>
      <div className="header-gen">
        <img className="gen-img" src={image}></img>
      </div>
    </>
  );
}
