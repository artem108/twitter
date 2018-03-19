import React, { Component } from 'react';
import Main from './Main/containers/Main'

class App extends Component {
  state = {twits: []}

  componentDidMount() {
    // fetch('/users')
    //   .then(res => res.json())
    //   .then(twits => this.setState({ twits }));
  }

  render() {
    const { twits } = this.state
    return (
      <div className="App">
        <Main twits={twits} />
      </div>
    );
  }
}

export default App;

// {this.state.users.map(user =>
//   <div key={user.id}>{user.username}</div>
// )}
