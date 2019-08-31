import React, { Component } from "react";

class TechList extends Component {
  state = {
    techs: ["Node.js", "ReactJS", "React Native"]
  };
  render() {
    return (
      <ul>
        <li>NodeJs</li>
        <li>ReactJs</li>
        <li>React Native</li>
      </ul>
    );
  }
}

export default TechList;
