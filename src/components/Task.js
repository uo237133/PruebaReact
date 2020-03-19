import React from "react";
import "./Task.css";
import PropTypes from "prop-types";

class Task extends React.Component {
  styleCompleted() {
    return {
      fontSize: "20px",
      color: this.props.tarea.done ? "gray" : "black",
      textDecoration: this.props.tarea.done ? "line-through" : "none"
    };
  }

  render() {
    const { tarea } = this.props;
    return (
      <div style={this.styleCompleted()}>
        {tarea.title} - {tarea.description} - {tarea.done} - {tarea.id}
        <input
          type="checkbox"
          onChange={this.props.updateTarea.bind(this, tarea.id)}
        />
        <button
          style={btnDelete}
          onClick={this.props.deleteTarea.bind(this, tarea.id)}
        >
          x
        </button>
      </div>
    );
  }
}

Task.propTypes = {
  tarea: PropTypes.object.isRequired
};

const btnDelete = {
  fontSize: "18px",
  background: "#ea2027",
  color: "#fff",
  border: "none",
  padding: "10 px 15px",
  borderRadius: "50%",
  cursor: "pointer"
};

export default Task;
