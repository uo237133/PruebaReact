import React from "react";
import Task from "./Task";
import PropTypes from "prop-types";

class Tasks extends React.Component {
  render() {
    return this.props.tareas.map(tarea => (
      <Task tarea={tarea} key={tarea.id} />
    ));
  }
}

Tasks.propTypes = {
  tareas: PropTypes.array.isRequired
};

export default Tasks;
