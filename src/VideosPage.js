import React, { Component } from 'react'
import Content from './Content'
import './VideosPage.css'

export default class VideosPage extends Component {
  render() {
    return (
      <Content className='VideosPage'>
        <h2>Here are my Videos</h2>
        <ol>
          <li>Video 1</li>
          <li>Video 2</li>
        </ol>
      </Content>
    )
  }
}
