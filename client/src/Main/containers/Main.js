import React, { Component } from 'react';
import '../../css/Main.css';
import SearchForm from '../components/SearchForm'
import ListTwits from '../components/ListTwits'
import { DotLoader } from 'react-spinners'

class Main extends Component {
  constructor(props) {
    super(props)
      this.state = {
        twits: [],
        isLoading: false,
        error: false
      }
  this.searchTweet = this.searchTweet.bind(this)
  }

  searchTweet(hashtag) {
    this.setState({ isLoading: true });

    fetch(`/tweets/${hashtag}`)
      .then(res => res.json())
      .then(twits => this.setState({
          twits: twits,
          isLoading: false
        }))
      .catch(error => this.setState({
          error: true,
          isLoading: false
        }));
  }

  render() {
    const { isLoading, error } = this.state
    return (
      <section className="main-container">
        <SearchForm
          searchTweet={this.searchTweet}
          isLoading={this.isLoading}
        />
          {
          !isLoading &&
            <ListTwits
              twits={this.state.twits}
            />
          }
          {
            isLoading &&
            <section className="loading-spinner">
              <DotLoader
                color={'#fff'}
                loading={isLoading}
                />
                <p>Loading...</p>
            </section>
          }
          {
            error && <h1>Something went wrong ¯\_(ツ)_/¯</h1>
          }
      </section>
    );
  }
}

export default Main;
