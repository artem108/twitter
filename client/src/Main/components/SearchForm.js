import React, { Component } from 'react';
import '../../css/Search.css';

class SearchForm extends Component {
  constructor(props) {
    super(props);
      this.state = {
        value: '',
      };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit() {
    this.props.searchTweet(this.state.value)
  }

  render() {
    return (
      <section className="search-form">
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <button type="submit" onClick={this.handleSubmit}>search</button>
      </section>
    );
  }
}

export default SearchForm
