import React from "react";
import notes from "../notes";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.key}</h1>
      <p>{props.content}</p>
    </div>
  );
}

export default Note;
