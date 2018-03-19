import React, { Component } from 'react';
import '../../css/Main.css';
import SearchForm from '../components/SearchForm'
import ListTwits from '../components/ListTwits'

class Main extends Component {
  constructor(props) {
    super(props)
      this.state = {
        twits: []
      }
  this.searchTweet = this.searchTweet.bind(this)
  }

searchTweet(twits) {
  console.log('twits', twits);
  this.setState({ twits: twits })
}

  render() {

    console.log('df',this.state.twits);
    return (
      <section className="main-container">
        <SearchForm
          searchTweet={this.searchTweet}
        />
        <ListTwits
          twits={this.state.twits}
        />
      </section>
    );
  }
}

export default Main;
