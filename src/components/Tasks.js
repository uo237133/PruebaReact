import React from "react";
import Task from "./Task";

class Tasks extends React.Component {
  render() {
    return this.props.tareas.map(tarea => (
      <Task tarea={tarea} key={tarea.id} />
    ));
  }
}

export default Tasks;
