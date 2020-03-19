import React from "react";
import "./App.css";
import archivoTareas from "./archivos/archivoTareas.json";
import Tasks from "./components/Tasks";
import TaskForm from "./components/TaskForm";

class App extends React.Component {
  state = {
    tareas: archivoTareas
  };
  render() {
    return (
      <div>
        <TaskForm />
        <Tasks tareas={this.state.tareas} />
      </div>
    );
  }
}

export default App;
