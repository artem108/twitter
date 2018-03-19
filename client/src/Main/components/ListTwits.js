import React from 'react';
import GridList from './GridList'
import TimelineList from './TimelineList'
import '../../css/TweetList.css';

const ListTwits = (props) => {
  const { twits } = props

  return (
    <section className="tweets-container">
        <section className="grid-tweets">
          {
            twits.map(item => {
            return <GridList tweet={item} key={item.id} />
            })
          }
        </section>
        <section className="timeline-tweets">
          {
            twits.map(item => {
            return <TimelineList tweet={item} key={item.id}/>
            })
          }
        </section>
    </section>
  )
}

export default ListTwits
