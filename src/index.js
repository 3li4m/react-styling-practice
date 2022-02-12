//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const hours = date.getHours();

const heading = {
  color: "red"
};

function timeOfDay() {
  if (hours >= 0 && hours < 12) {
    heading.color = "red";
    return "Good Morning";
  } else if (hours >= 12 && hours < 18) {
    heading.color = "green";
    return "Good Afternoon";
  } else {
    heading.color = "blue";
    return "Good Eveening";
  }
}

/*
let greeting;
if (hours >= 0 && hours < 12) {
  heading.color = "red";
  greeting = "Good Morning";
} else if (hours >= 12 && hours < 18) {
  heading.color = "green";
  greeting = "Good Afternoon";
} else {
  heading.color = "blue";
  greeting = "Good Eveening";
}
*/

ReactDOM.render(
  <div>
    <h1 className="heading" style={heading}>
      {timeOfDay()}
    </h1>
  </div>,
  document.getElementById("root")
);
