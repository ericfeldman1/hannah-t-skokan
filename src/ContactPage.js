import React, { Component } from 'react'
import Content from './Content'

export default class ContactPage extends Component {
  render() {
    return (
      <Content className='Contact'>
        <p>Get in Touch!</p>
        <form class="contact-form" action="contactform.php" method="post"
        >
          <input type="text" name="name" placeholder="First name"
          />
          <input type="text" name="name" placeholder="Last name"
          />
          <input type="text" name="mail" placeholder="E-mail"
          />
          <textarea id="textArea" rows="10" cols="70">
          </textarea>
          <button type="submit" name="button">Submit
          </button>
        </form>
      </Content>
    )
  }
}
