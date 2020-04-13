import React, { Component } from 'react'
import Content from './Content'
import resume from './Media/resume.png'
import './ResumePage.css'

export default class ResumePage extends Component {
  render() {
    return (
      <Content className='Resume'>
        <img src={resume} alt="Resume" />
      </Content>
    )
  }
}
