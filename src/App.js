import React from "react";
import "./App.css";

// function HelloWorld(props) {
//   return (
//     <div id="hello">
//       <h3>{props.subtitle}</h3>
//       {props.myText}
//       <hr></hr>
//     </div>
//   );
// }

class HelloWorld extends React.Component {
  state = {
    show: true
  };

  cambiar = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    if (this.state.show) {
      return (
        <div id="hello">
          <h3>{this.props.myText}</h3>
          {this.props.subtitle}
          <button onClick={this.cambiar}>Ocultar</button>
          <hr></hr>
        </div>
      );
    } else {
      return (
        <div>
          <h1>No hay elementos</h1>
          <button onClick={this.cambiar}>Mostrar</button>
        </div>
      );
    }
  }
}

function App() {
  return (
    <div>
      This is my component:
      <HelloWorld myText="Hello word" subtitle="loremp ipsum" />
      <HelloWorld myText="hola mundo" />
    </div>
  );
}

export default App;
