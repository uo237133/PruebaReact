import React from "react";
import "./App.css";
import archivoTareas from "./archivos/archivoTareas.json";
import Tasks from "./components/Tasks";
import TaskForm from "./components/TaskForm";

class App extends React.Component {
  state = {
    tareas: archivoTareas
  };

  addTarea = (title, description) => {
    const nuevaTarea = {
      title: title,
      description: description,
      id: this.state.tareas.length
    };
    this.setState({
      tareas: [...this.state.tareas, nuevaTarea]
    });
  };

  render() {
    return (
      <div>
        <TaskForm addTarea={this.addTarea} />
        <Tasks tareas={this.state.tareas} />
      </div>
    );
  }
}

export default App;
