import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.svg";

export default function() {
  return (
    <Link to="/">
      <img src={logo} alt="logo" />
    </Link>
  );
}
