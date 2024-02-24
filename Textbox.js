import { Component } from "react";
import { useState } from "react";

export default function Textbox() {
  let [text, setText] = useState("Akash");
  console.log(text);

  let touppercase = () => {
    console.log("button is clicked" + text);
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  let textchanged = (e) => {
    console.log("area is acced");
    setText(e.target.value);
  };
  return (
    <>
      <div>
        <div className="form-group">
          <label htmlFor="textbox">Enter Text to convert</label>
          <textarea
            onChange={textchanged}
            className="form-control"
            value={text}
            id="textbox"
            rows="8"
          ></textarea>
        </div>
        <button type="button" onClick={touppercase} class="btn btn-primary">
          ToUpperCase
        </button>
        <div>
          <h2 className="mx-3">Text summary</h2>
          <p1 className="mx-3">
            Charecters : {text.length} and Words :{text.split(" ").length}
          </p1>
        </div>
      </div>
    </>
  );
}
