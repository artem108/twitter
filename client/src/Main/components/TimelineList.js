import React from 'react';
import '../../css/TimeLine.css'

const TimelineList = (props) => {
  const { tweet } = props

  const styleImg = {
    borderRadius: '20px',
    backgroundImage: `url(${tweet.user.profile_image_url})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }

  return (
    <section className="timeline-box">
      <span className="avatar" style={styleImg}/>
        <section className="tweet-data">
          <h3 className="user-name">{tweet.user.name}</h3>
          <p className="user-text">{tweet.text}</p>
        </section>
    </section>
  )
}

export default TimelineList
