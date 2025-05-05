import React from "react";
import Accordion from "./components/Accordion";
import { accordionData } from "./utils/content";

export default function App() {
  return (
    <div className="container">
      {accordionData.map(({ title, content }) => (
        <Accordion title={title} content={content} />
      ))}
    </div>
  );
}
