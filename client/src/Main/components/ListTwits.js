import React from 'react';
import GridList from './GridList'
import TimelineList from './TimelineList'
import '../../css/TweetList.css';

const ListTwits = (props) => {
  const { tweets } = props

  return (
    <section className="tweets-container">
        <section className="grid-tweets">
          {
            tweets.map(item => {

            return <GridList tweet={item.tweet} key={item.tweet.id_str} />
            })
          }
        </section>
        <section className="timeline-tweets">
          {
            tweets.map(item => {
            return <TimelineList tweet={item.tweet} key={item.tweet.id_str}/>
            })
          }
        </section>
    </section>
  )
}

export default ListTwits
