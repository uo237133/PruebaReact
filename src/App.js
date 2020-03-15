import React from "react";
import "./App.css";
import task from "./archivos/task.json";
import Tasks from "./components/Tasks";

class App extends React.Component {
  state = {
    tareas: task
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
