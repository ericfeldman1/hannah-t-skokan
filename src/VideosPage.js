import React, { Component } from 'react'
import Content from './Content'
import './VideosPage.css'

export default class VideosPage extends Component {
  render() {
    return (
      <Content className='VideosPage'>
        <h1>Videos</h1>
        <div className="videos">
          <iframe width="900" height="506" src="https://www.youtube.com/embed/9bSGZL7j9l0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="626" height="352" src="https://www.youtube.com/embed/2XHY51SXjsE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="626" height="352" src="https://www.youtube.com/embed/Kj_tyiuWX_o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="626" height="352" src="https://www.youtube.com/embed/rQBNQeSr5pw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </Content>
    )
  }
}
