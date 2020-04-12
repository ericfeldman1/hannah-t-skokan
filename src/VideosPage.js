import React, { Component } from 'react'
import Content from './Content'
import './VideosPage.css'

export default class VideosPage extends Component {
  render() {
    return (
      <Content className='VideosPage'>
        <h2>Here are my Videos</h2>
        <iframe width="420" height="315"
          src="https://www.youtube.com/watch?v=9bSGZL7j9l0">
        </iframe>
        <ol>
          <li>Video 1</li>
          <li>Video 2</li>
        </ol>
      </Content>
    )
  }
}
