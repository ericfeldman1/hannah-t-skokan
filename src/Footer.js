import React, { Component } from 'react'
import Content from './Content'
import './Footer.css'

export default class Footer extends Component {
  render() {
    return (
      <Content className='Footer'>
        {/* <p>@hannahtskokan, 2020. All Rights Reserved.</p> */}
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
          <li>Etc</li>

        </ul>
      </Content>
    )
  }
}
