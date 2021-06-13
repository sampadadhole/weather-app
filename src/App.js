import React from "react"
import './App.css';
import Weather from "./components/Weather"
import Temperature from "./components/Temperature"

function App() {
  return (
    <div className="App">
     <Weather />
     {/* <Temperature value={this.data}/> */}
    </div>
  )
}

export default App;
