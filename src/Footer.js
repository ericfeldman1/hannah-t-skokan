import React, { Component } from 'react'
import Content from './Content'
import './Footer.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTwitter } from '@fortawesome/free-solid-svg-icons'
import facebook from './Media/footer_facebook_icon.png'
import twitter from './Media/footer_twitter_icon.png'
import instagram from './Media/footer_instagram_icon.png'

export default class Footer extends Component {
  render() {
    return (
      <Content className='Footer'>
         <ul class="social-icons">
  <li><a href="https://www.instagram.com/livingindiatv/"><img src={instagram} alt="Instagram" /><span></span></a></li>
  {/* <li><a href="https://youtube.com">youtube<span></span></a></li> */}
  <li><a href="https://twitter.com/livingindiatv"><img src={twitter} alt="Twitter" /><span></span></a></li>
  <li><a href="https://www.facebook.com/livingindiatv/"><img src={facebook} alt="Facebook" />
<span></span></a></li>
 </ul>
      </Content>
    )
  }
}
