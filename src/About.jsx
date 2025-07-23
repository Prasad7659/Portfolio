import React, { useState } from "react";
import Image from "./image.jsx";
import AboutContent from "./AboutContent.jsx";

export default function About() {
  const [hovered, setHovered] = useState(false);

  const imageStyles = {
    transform: hovered ? "translateX(10%)" : "translateX(80%)",
    transition: "transform 2s ease-in-out",
    textAlign: "left",
    maxWidth:"1200px"
  };

  const aboutContentStyles = {
    opacity: hovered ? 1 : 0,
    transform: hovered ? "translateX(30)" : "translateX(70px)",
    transition: "opacity 2s ease-in-out, transform 2s ease-in-out",
    marginLeft: "20px",
    maxWidth: "800px",
    fontWeight:"bold"
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center"
      }}
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
    >
      <div style={imageStyles}>
        <Image />
      </div>

      <div style={aboutContentStyles}>
        <AboutContent />
      </div>
    </div>
  );
}
