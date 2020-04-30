import React, { Component } from 'react'
import Content from './Content'
import './VideosPage.css'
import YouTube from 'react-youtube';

export default class VideosPage extends Component {
  render() {
    const opts = {
      // height: '390',
      // width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        // autoplay: 1,
      },
    };
 
    return (
    <Content>
      <h1 className="title">Videos</h1>
<div className="videos">
    <YouTube videoId="9bSGZL7j9l0" opts={opts} onReady={this._onReady} />
    {/* <p>Short Reel</p> */}

    <YouTube videoId="2XHY51SXjsE" opts={opts} onReady={this._onReady} />
    {/* <p>Longer Reel</p> */}

    <YouTube videoId="Kj_tyiuWX_o" opts={opts} onReady={this._onReady} />
    <YouTube videoId="rQBNQeSr5pw" opts={opts} onReady={this._onReady} />
    </div>
    </Content>
    )
  }
 
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

/* <Content className='VideosPage'>
<h1 className="title">Videos</h1>
<div className="videos">
  <iframe width="900" height="506" src="https://www.youtube.com/embed/9bSGZL7j9l0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <iframe width="626" height="352" src="https://www.youtube.com/embed/2XHY51SXjsE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <iframe width="626" height="352" src="https://www.youtube.com/embed/Kj_tyiuWX_o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <iframe width="626" height="352" src="https://www.youtube.com/embed/rQBNQeSr5pw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
</Content> */