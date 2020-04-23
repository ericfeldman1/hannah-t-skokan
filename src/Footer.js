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
        <section id="lab_social_icon_footer">
<div class="container">
        <ul class="text-center center-block">
              <li><a href="#"><i id="social-fb" class="fa fa-facebook-square fa-3x social"></i></a></li>

	            <li><a href="#"><i id="social-tw" class="fa fa-twitter-square fa-3x social"></i></a></li>

	            <li><a href="#"><i id="social-gp" class="fa fa-google-plus-square fa-3x social"></i></a></li>

	           <li><a href="mailto:#"><i id="social-em" class="fa fa-envelope-square fa-3x social"></i></a></li>
    </ul>
</div>
</section>
      </Content>
    )
  }
}
