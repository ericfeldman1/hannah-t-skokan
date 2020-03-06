import React, { Component } from 'react'
import Content from './Content'
import './VideosPage.css'

export default class VideosPage extends Component {
  render() {
    return (
      <Content className='VideosPage'>
        <h2>Here are my favourite workouts</h2>
        <ol>
          <li><video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
Your browser does not support the video tag.
</video></li>
          <li><video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
Your browser does not support the video tag.
</video></li>
        </ol>
      </Content>
    )
  }
}
