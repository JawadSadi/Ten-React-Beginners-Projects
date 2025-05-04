import React, { useState } from "react";

export default function BackgroundToggler() {
  const [background, setBackground] = useState("white");
  const [textColor, setTextColor] = useState("#1b1b1b");
  const [buttonStyle, setButtonStyle] = useState("white");

  const handleClick = () => {
    setBackground(background === "white" ? "#1b1b1b" : "white");
    setTextColor(textColor === "#1b1b1b" ? "#ffa31a" : "#1b1b1b");
    setButtonStyle(buttonStyle === "white" ? "#1b1b1b1" : "white");
  };
  return (
    <div style={{ background, color: textColor }}>
      <button
        onClick={handleClick}
        style={{
          buttonStyle,
          color: textColor,
          border: `2px solid ${textColor}`,
        }}
      >
        {background === "#1b1b1b" ? "Black Theme" : "white Theme"}
      </button>

      <section>
        <h1 className="content">
          Welcome To The <br />
          Real World...
        </h1>
      </section>
    </div>
  );
}
