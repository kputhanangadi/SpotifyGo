import React, { useState } from "react";
import { useLocation } from "react-router";

export default function GeneratePage() {
  const location = useLocation();
  return <div>{location.state.checked}</div>;
}
