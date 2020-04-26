import React, { Component } from 'react'
import Content from './Content'
import './Footer.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTwitter } from '@fortawesome/free-solid-svg-icons'
// import facebook from './Media/footer_facebook_icon.png'
// import twitter from './Media/footer_twitter_icon.png'
// import instagram from './Media/footer_instagram_icon.png'

export default class Footer extends Component {
  render() {
    return (
      <Content className='Footer'>
        <section id="lab_social_icon_footer">
<div class="container">
        <ul class="text-center center-block">
              <li><a href="https://www.instagram.com/htskokan/?igshid=1f1mojpttjkq6" target="_blank"> <i class="fa fa-instagram fa-3x social" title="Instagram"></i></a></li>

	            <li><a href="https://twitter.com/htskokan?lang=en" target="_blank"><i id="social-tw" class="fa fa-twitter-square fa-3x social"></i></a></li>

	           <li><a href="mailto:htskokan@gmail.com"><i id="social-em" class="fa fa-envelope-square fa-3x social" target="_blank"></i></a></li>
    </ul>
</div>
</section>
      </Content>
    )
  }
}

// https://codepen.io/1wdtv/pen/ojKxaE