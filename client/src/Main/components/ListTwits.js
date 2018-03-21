import React, {Component} from 'react';
import GridList from './GridList'
import TimelineList from './TimelineList'
import '../../css/TweetList.css';

class ListTwits extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 1,
      twitsPerPage: 10
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  render() {
  const { twits } = this.props
    const {currentPage, twitsPerPage } = this.state;

    const indexOfLastTwit = currentPage * twitsPerPage;
    const indexOfFirstTwit = indexOfLastTwit - twitsPerPage;
    const currentTwit = twits.slice(indexOfFirstTwit, indexOfLastTwit);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(twits.length / twitsPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <p
          key={number}
          id={number}
          onClick={this.handleClick}
        >
          {number}
        </p>
      );
    });


  return (
    <section className="tweets-container">
      <section className="timeline-tweets">
         <div className="pagination-container">
            {renderPageNumbers}
          </div>
            {
              currentTwit.map((item, index) => {
                return  <TimelineList tweet={item} key={item.id}/>
              })
            }
          </section>
        {/* <section className="grid-tweets"> */}
          {
            // currentTwit.map(item => {
            //   return <GridList tweet={item} key={item.id} />
            //   })
          }
        {/*</section>*/}
    </section>
  )
}
}

export default ListTwits
