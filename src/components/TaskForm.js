import React, { Component } from "react";

export default class TaskForm extends Component {
  state = {
    title: "",
    description: ""
  };
  cuandoSubmit = e => {
    console.log(this.state);
    e.preventDefault();
  };
  cuandoChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <form onSubmit={this.cuandoSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Escribe una tarea nueva"
          onChange={this.cuandoChange}
          value={this.state.title}
        />
        <br />
        <br />
        <textarea
          name="description"
          placeholder="Escribe una descripcion"
          onChange={this.cuandoChange}
          value={this.state.description}
        ></textarea>
        <input type="submit" />
      </form>
    );
  }
}
