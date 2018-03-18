import React, { Component } from 'react';
import '../../css/TimeLine.css'

const GridList = (props) => {
  const { tweet } = props
  return (
    <section className="timeline-box">
      <div className="avatar">
      </div>
        <section className="tweet-data">
          <h3 className="user-name">{tweet.user.name}</h3>
            <p className="user-text">{tweet.text}</p>
        </section>
    </section>
  )
}

export default GridList
