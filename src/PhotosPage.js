import React, { Component } from 'react'
import Content from './Content'
import caberet from './Media/more_photos_caberet.jpg'
import descendants from './Media/more_photos_descendants.png'
import guys_and_dolls from './Media/more_photos_guys_and_dolls.png'
import into_the_woods from './Media/more_photos_into_the_woods.png'
import les_miserables from './Media/more_photos_les_miserables.png'
import './PhotosPage.css'


export default class PhotosPage extends Component {
  render() {
    return (
      <Content className='Photos'>
        <p>Stick in photos from media folder</p>
        <div className="images">
        <img src={les_miserables} alt="Les Miserables" />
        <img src={guys_and_dolls} alt="Guys and Dolls" />
        <img src={descendants} alt="Descendants" />
        <img src={into_the_woods} alt="Into the Woods" />
        <img src={caberet} alt="Caberet" />
        </div>
      </Content>
    )
  }
}
