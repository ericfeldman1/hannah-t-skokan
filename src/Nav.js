import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Content from './Content'
import './Nav.css'

export default class Nav extends Component {
  render() {
    return (
      <Content className='Nav'>
<nav className="navbar navbar-expand-lg">
  <Link className="navbar-brand" to="/">Hannah T Skokan</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      {/* <Link className="Link nav-item nav-link active" to="/">Home <span className="sr-only">(current)</span></Link> */}
      <Link className="Link nav-item nav-link" to="/photos">Photos</Link>
      <Link className="Link nav-item nav-link" to="/videos">Videos</Link>
      <Link className="Link nav-item nav-link" to="/resume">Resume</Link>
    </div>
  </div>
</nav>
        {/* <div className="name">
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
        </Link> */}
        {/* </div> */}
      </Content>
    )
  }
}
