import { Component, useState } from "react";

export default function EmailForm() {
  let handleoutput = (e) => {
    e.preventDefault();
    console.log("hello world");
    if (user === "akash@gmail.com" && pass === "akash") {
      console.log(user);
      alert("valid details");
    } else {
      alert("invalid details");
      console.log(pass);
    }
  };
  let [user, setUser] = useState("");
  let [pass, setPass] = useState("");

  let [stylemode, setStylemode] = {
    color: "red",
    backgroundColor: "black",
  };

  let mystyle = {
    color: "red",
    backgroundColor: "black",
  };
  if (mystyle.color === "red") {
    setStylemode({
      color: "blue",
      backgroundColor: "green",
    });
  }
  return (
    <>
      <form onSubmit={handleoutput}>
        <div className="mb-3">
          <label
            style={stylemode}
            htmlFor="exampleInputEmail1"
            className="form-label"
          >
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setUser(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
        <div style={mystyle} className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
