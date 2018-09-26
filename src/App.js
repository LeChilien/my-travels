import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Quote from "./Travel"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Travels</h1>
        </header>
        <Quote
          destination= "Chili"
          city=" Santiago"
          photo="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/800px-Flag_of_Chile.svg.png"
          distance=" Loin, très loin..."
        />
        <Quote
          destination= "Finlande"
          city=" Helsinki"
          photo="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_Finland.png/800px-Flag_of_Finland.png"
          distance=" Un peu plus moins loin!"
        />
      </div>
    );
  }
}

export default App;