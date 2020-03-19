import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import archivoTareas from "./archivos/archivoTareas.json";

// Componentes
import Tasks from "./components/Tasks";
import TaskForm from "./components/TaskForm";
import Posts from "./components/Posts";

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

  deleteTarea = id => {
    // filtra y deja pasar todas las tareas menos la del id dado
    const nuevasTareas = this.state.tareas.filter(t => t.id !== id);
    this.setState({ tareas: nuevasTareas });
  };

  updateTarea = id => {
    const nuevasTareas = this.state.tareas.map(t => {
      if (t.id === id) t.done = !t.done;
      return t;
    });
    this.setState({ tareas: nuevasTareas });
  };

  render() {
    return (
      <div>
        <Router>
          <Link to="/">Home</Link>
          <br />
          <Link to="/posts">Posts</Link>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <div>
                  <TaskForm addTarea={this.addTarea} />
                  <Tasks
                    tareas={this.state.tareas}
                    deleteTarea={this.deleteTarea}
                    updateTarea={this.updateTarea}
                  />
                </div>
              );
            }}
          ></Route>
          <Route path="/posts" component={Posts}></Route>
        </Router>
      </div>
    );
  }
}

export default App;
