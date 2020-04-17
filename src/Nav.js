import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Content from './Content'
import './Nav.css'

export default class Nav extends Component {
  render() {
    return (
      <Content className='Nav'>
        <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container"> 
         <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-nav-demo" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
        <a href="#" class="navbar-brand"><span class="glyphicon glyphicon-picture" aria-hidden="true"></span> IMGS</a>
    </div>
    <div class="collapse navbar-collapse" id="bs-nav-demo">
    <ul class="nav navbar-nav">
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
        <li><a href="#">Sign Up</a></li>
        <li><a href="#">Log In</a></li>
    </ul>
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
