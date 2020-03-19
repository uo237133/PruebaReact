import React, { Component } from "react";

export default class Posts extends Component {
  state = {
    posts: []
  };

  async componentDidMount() {
    const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await resp.json();
    this.setState({ posts: data });
  }

  render() {
    return (
      <div>
        <h1>Publicaciones</h1>
        {this.state.posts.map(p => {
          return (
            <div key={p.id}>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
