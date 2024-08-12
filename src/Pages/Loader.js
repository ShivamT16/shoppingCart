import React from "react";
import { FadeLoader } from "react-spinners";
import { useLockBodyScroll } from "@uidotdev/usehooks";
import "./loader.css";

export function Loader() {
  useLockBodyScroll();

  return (
    <div className="loader-wrapper">
      <FadeLoader color="#514a9d" />
    </div>
  );
}
