import React from "react";
import Task from "./Task";
import PropTypes from "prop-types";

class Tasks extends React.Component {
  render() {
    return this.props.tareas.map(tarea => (
      <Task
        tarea={tarea}
        key={tarea.id}
        deleteTarea={this.props.deleteTarea}
        updateTarea={this.props.updateTarea}
      />
    ));
  }
}

Tasks.propTypes = {
  tareas: PropTypes.array.isRequired
};

export default Tasks;
