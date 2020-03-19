import React from "react";
import "./App.css";
import archivoTareas from "./archivos/archivoTareas.json";
import Tasks from "./components/Tasks";

class App extends React.Component {
  state = {
    tareas: archivoTareas
  };
  render() {
    return (
      <div>
        <Tasks tareas={this.state.tareas} />
      </div>
    );
  }
}

export default App;
