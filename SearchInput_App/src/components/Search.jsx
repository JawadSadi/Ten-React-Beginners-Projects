import React from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function Search() {
  const [seachInput, setSearchInput] = useState(false);
  const [color, setColor] = useState("white");

  function handleClick(e) {
    setColor("#1b1b1b");
    if (e.target.className === "container") {
      setSearchInput(false);
      setColor("#fff");
    }
  }
  return (
    <section
      className="container"
      style={{ backgroundColor: color }}
      onClick={handleClick}
    >
      {seachInput ? (
        <input type="text" placeholder="Search..." />
      ) : (
        <FaSearch onClick={() => setSearchInput(true)} size={32} />
      )}
    </section>
  );
}
