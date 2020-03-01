import React, { Component } from 'react'
import Content from './Content'
import portrate from './g-paltrow-self-portrate.png'
import './AboutPage.css'

export default class AboutPage extends Component {
  render() {
    return (
      <Content className='AboutPage'>
        <img src={portrate} alt='Self portrate' />
        <h2>About</h2>
        <p>
          
        </p>
        <p>
        Lorem ipsum dolor sit, consectetur adipiscing elit. Curabitur sed neque non dolor ultrices maximus ut in tellus. Nullam sodales congue consequat.        </p>
        <p>
        Donec ultrices nisl felis, a fringilla libero gravida vel.
        </p>
      </Content>
    )
  }
}
