import React from "react";

class Task extends React.Component {
  render() {
    const { tarea } = this.props;

    return (
      <div>
        {tarea.title} - {tarea.description} - {tarea.done} - {tarea.id}
        <input type="checkbox" />
        <button>x</button>
      </div>
    );
  }
}

export default Task;
