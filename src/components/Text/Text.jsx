import { Parallax } from "react-scroll-parallax";
import React from "react";
import "./Text.css";

const Text = () => {
  return (
    <Parallax className="text-container" speed={-10}>
      <p className="text-p"> Your journey begins now! Are you ready?</p>
    </Parallax>
  );
};

export default Text;
