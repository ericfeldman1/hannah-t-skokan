import React, { Component } from 'react'
import Content from './Content'
import resume from './Media/resume.png'
import './ResumePage.css'

export default class ResumePage extends Component {
  render() {
    return (
      <Content className='Resume'>
      <h1 className="title">Resume</h1>
        <a href={resume} download>
         <button>Download Resume</button></a>
        <img src={resume} alt="Resume" />
      </Content>
    )
  }
}
