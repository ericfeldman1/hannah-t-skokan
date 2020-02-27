import React, { Component } from 'react'
import Content from './Content'
import headshot from './headshot_photo.png'

export default class HeadshotPage extends Component {
  render() {
    return (
      <Content className='Headshot'>
        <p>This is my awesome Resume</p>
      </Content>
    )
  }
}
