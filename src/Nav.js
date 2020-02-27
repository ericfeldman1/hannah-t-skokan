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
        <Link to='/about'>
          About
        </Link>
        <Link to='/workouts'>
          Workouts
        </Link>
        <Link to='/headshot'>
          Headshot
        </Link>
        <Link to='/resume'>
          Resume
        </Link>
        <Link to='/component6'>
          Comp_6
        </Link>
      </Content>
    )
  }
}
