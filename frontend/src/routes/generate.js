import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";

export default function GeneratePage() {
  const location = useLocation();

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
      console.log(body);
      const response = await fetch("http://localhost:5000/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      if (response.ok) {
        const data = (await response).json();
        console.log(data);
      }
    }
    getData();
  }, []);
  return (
    <>
      <div>{location.state.name}</div>;
    </>
  );
}
