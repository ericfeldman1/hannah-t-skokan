import React, { Component } from 'react'
import Content from './Content'
import './Header.css'

export default class Header extends Component {
  render() {
    return (
      <Content className="header_text">
        {/* <h1>Artist | Performer | Director | Historian | New Yorker</h1> */}
        <h1 className="hts">Hannah T Skokan</h1>
      </Content>
    )
  }
}
