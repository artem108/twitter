import React, { Component } from 'react';
import '../../css/Main.css';
import SearchForm from '../components/SearchForm'
import ListTwits from '../components/ListTwits'

import tweets from '../api.js'

class Main extends Component {
  constructor(props) {
    super(props)
      this.state = {
        tweets: []
      }
    this.searchTweet.bind(this)
  }

componentDidMount() {
  this.setState({ tweets: tweets })
}

searchTweet(value) {
  console.log("search by: ", value);
}

  render() {
    const { tweets } = this.state

    return (
      <section className="main-container">
        <SearchForm
          searchTweet={this.searchTweet}
        />
        <ListTwits
          tweets={tweets}
        />
      </section>
    );
  }
}

export default Main;
