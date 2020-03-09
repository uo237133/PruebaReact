import React from "react";
import "./App.css";

function HelloWorld() {
  return <div id="hello">Hello world!</div>;
}

const App = () => (
  <div>
    This is my compoent: <HelloWorld />
  </div>
);

class App2 extends React.Component {
  render() {
    return (
      <div>
        This is my compoent: <HelloWorld />
      </div>
    );
  }
}

function App3() {
  return (
    <div>
      This is my component: <HelloWorld />
    </div>
  );
}

export default App;
