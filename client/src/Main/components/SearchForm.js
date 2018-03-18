import React, { Component } from 'react';
import '../../css/Search.css';

class SearchForm extends Component {
  constructor(props) {
    super(props)
      this.state = {
        value: ''
      }
    this.findClick.bind(this)
    this.changeInput.bind(this)
  }

  changeInput(e) {
      this.setState({ value: e.target.value })
  }

  findClick() {
    const { value } = this.state
    if (value) this.props.searchTweet(value)
  }

  render() {
    return (
      <section className="search-form">
          <input type="text" onChange={this.changeInput} />
          <button onClick={this.findClick}>.</button>
      </section>
      )
    }
  }

export default SearchForm
