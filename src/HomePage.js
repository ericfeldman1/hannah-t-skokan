import React, { Component } from 'react'
import Content from './Content'
import './HomePage.css'
import homepage_solo from './Media/homepage_solo.jpg'
import homepage_class from './Media/homepage_class.png'


export default class HomePage extends Component {
  render() {
    return (
      <Content className='HomePage'>
        <div className="homepage_header">
          {/* <h1>Hannah T Skokan</h1> */}
          <img src={homepage_solo} alt="headshot" />
          <h2>Artist</h2>
          <h2>Performer</h2>
          <h2>Director</h2>
          <h2>Historian</h2>
          <h2>New Yorker</h2>
        </div>
        <img className="class_photo" src={homepage_class} alt="class photo" />
        <p>Blurb about showcase...</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl. Et ultrices neque ornare aenean euismod. Aliquam etiam erat velit scelerisque in. Tristique senectus et netus et malesuada fames ac. Varius morbi enim nunc faucibus. Nisi scelerisque eu ultrices vitae auctor eu. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Morbi tincidunt augue interdum velit euismod in pellentesque massa placerat. Nisi quis eleifend quam adipiscing. Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.</p>

      </Content>
    )
  }
}
