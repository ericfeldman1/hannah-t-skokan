import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Content from './Content'
import './Nav.css'

export default class Nav extends Component {
  render() {
    return (
      <Content className='Nav'>
        <div className="name">
        <p>Hannah T Skokan</p>
        </div>
        <div className="bar">
        <Link className='Link' to='/'>
          Home
        </Link>
        <Link className='Link' to='/photos'>
          Photos
        </Link>
        <Link className='Link' to='/videos'>
          Videos
        </Link>
        <Link className='Link' to='/resume'>
          Resume
        </Link>
        <Link className='Link' to='/contact'>
          Contact
        </Link>
        </div>
      </Content>
    )
  }
}
