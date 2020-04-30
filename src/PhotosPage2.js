import React, { Component } from 'react'
import Content from './Content'
import caberet from './Media/more_photos_caberet.jpg'
import descendants from './Media/more_photos_descendants.png'
import guys_and_dolls from './Media/more_photos_guys_and_dolls.png'
import into_the_woods from './Media/more_photos_into_the_woods.png'
import les_miserables from './Media/more_photos_les_miserables.png'
import './PhotosPage2.css'



export default class PhotosPage2 extends Component {
  render() {
    return (
      <Content className='Photos'>
          <h1 className="title">Photos</h1>
<div class="row">
  <div class="column">
    <img src={les_miserables} alt="Les Miserables" />
    <p>Les Miserables at Pace Unviersity</p>
    <img src={guys_and_dolls} alt="Guys and Dolls" />
    <p>Guys and Dolls at Pace University</p>
  </div>
  <div class="column">
  <img src={descendants} alt="Descendants" />
  <p>Descendants at Disney Theatrical Group</p>
  <img src={into_the_woods} alt="Into the Woods" />
  <p>Into the Woods at Quisisana Resort</p>
  </div>
  <div class="column">
  <img src={caberet} alt="Caberet" />
  <p>Cabaret at Broadway Workshop</p>
  </div>
  
</div>  
      </Content>
    )
  }
}

{/* <div className="images">
        <div className="holder">
         <img src={les_miserables} alt="Les Miserables" />
        </div>  
        <div className="holder">
          <img src={guys_and_dolls} alt="Guys and Dolls" />
        </div>
        <div className="holder">
          <img src={descendants} alt="Descendants" />
        </div>
        <div className="holder">
          <img src={into_the_woods} alt="Into the Woods" />
        </div>
        <div className="holder">
          <img src={caberet} alt="Caberet" />
        </div>
        </div>  */}