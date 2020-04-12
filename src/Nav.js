import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Content from './Content'
import './Nav.css'

export default class Nav extends Component {
  render() {
    return (
      <Content className='Nav'>
        <Link to='/'>
          Home
        </Link>
        {/* <Link to='/about'>
          About
        </Link> */}
        <Link to='/photos'>
          Photos
        </Link>
        <Link to='/videos'>
          Videos
        </Link>
        <Link to='/resume'>
          Resume
        </Link>
        <Link to='/contact'>
          Contact
        </Link>
      </Content>
    )
  }
}
