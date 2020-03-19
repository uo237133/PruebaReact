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
    //Forma 3:const colorRed = { background: "red" };
    return (
      // Forma 1: <div className="red"
      // Forma 2: <div>style={{ background: "red" }}>
      // Forma 3: <div style={colorRed}>
      <div style={this.styleCompleted()}>
        {tarea.title} - {tarea.description} - {tarea.done} - {tarea.id}
        <input type="checkbox" />
        <button style={btnDelete}>x</button>
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
