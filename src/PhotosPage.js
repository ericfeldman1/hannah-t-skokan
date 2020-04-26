import React, { Component } from 'react'
import Content from './Content'
import caberet from './Media/more_photos_caberet.jpg'
import descendants from './Media/more_photos_descendants.png'
import guys_and_dolls from './Media/more_photos_guys_and_dolls.png'
import into_the_woods from './Media/more_photos_into_the_woods.png'
import les_miserables from './Media/more_photos_les_miserables.png'
// import './PhotosPage.css'
// import ImageGallery from 'react-image-gallery';
import Gallery from 'react-grid-gallery';

const IMAGES =
[{
        src: caberet,
        thumbnail: caberet,
        // thumbnailWidth: 320,
        // thumbnailHeight: 174,
        // isSelected: true,
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: descendants,
        thumbnail: descendants,
        // thumbnailWidth: 320,
        // thumbnailHeight: 212,
        // tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
},
{
        src: guys_and_dolls,
        thumbnail: guys_and_dolls,
        // thumbnailWidth: 320,
        // thumbnailHeight: 212
},
{
  src: into_the_woods,
  thumbnail: into_the_woods,
  // thumbnailWidth: 320,
  // thumbnailHeight: 212
},
{
  src: les_miserables,
  thumbnail: les_miserables,
}]


export default class PhotosPage extends Component {

  styleSmall(){
    return ({
       margin: '10px'
    });
  }

  render() {
    return (
      <Content className='Photos'>
        <h1 className="title">Photos</h1>
        <Gallery images={IMAGES}
         />
      </Content>
    )
  }
}


{/* <Gallery images={IMAGES}/> */}

        // <div className="images">
        // <div className="holder">
        //  <img src={les_miserables} alt="Les Miserables" />
        // </div>  
        // <div className="holder">
        //   <img src={guys_and_dolls} alt="Guys and Dolls" />
        // </div>
        // <div className="holder">
        //   <img src={descendants} alt="Descendants" />
        // </div>
        // <div className="holder">
        //   <img src={into_the_woods} alt="Into the Woods" />
        // </div>
        // <div className="holder">
        //   <img src={caberet} alt="Caberet" />
        // </div>
        // </div> 


        
        // <p>Stick in photos from media folder</p>
        // <div className="row">
        // <div className="col-lg-4 col-sm-6">
        //     <div className="thumbnail">
        //         <img src="http://i.imgur.com/qK42fUu.jpg" />
        //     </div>
        // </div>
        // <div className="col-lg-4 col-sm-6">
        //     <div className="thumbnail">
        //         <img src="https://images.unsplash.com/photo-1435771112039-1e5b2bcad966?dpr=2&fit=crop&fm=jpg&h=825&q=50&w=1450" />
        //     </div>
        // </div>
        // <div className="col-lg-4 col-sm-6">
        //     <div className="thumbnail">
        //         <img src="https://images.unsplash.com/photo-1442406964439-e46ab8eff7c4?dpr=2&fit=crop&fm=jpg&h=825&q=50&w=1450" />
        //     </div>
        // </div>
        // <div className="row">
        // <div className="col-lg-4 col-sm-6">
        //     <div className="thumbnail">
        //         <img src="https://images.unsplash.com/photo-1439524970634-649c37a69e5c?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1450&h=825&fit=crop&s=bfda9916c885869b43b70738693428d9" />
        //     </div>
        // </div>
        // <div className="col-lg-4 col-sm-6">
        //     <div className="thumbnail">
        //         <img src="https://images.unsplash.com/photo-1444090542259-0af8fa96557e?dpr=2&fit=crop&fm=jpg&h=825&q=50&w=1450" />
        //     </div>
        // </div>
        // <div className="col-lg-4 col-sm-6">
        //     <div className="thumbnail">
        //         <img src="https://images.unsplash.com/photo-1434543177303-ef2cc7707e0d?dpr=2&fit=crop&fm=jpg&h=825&q=50&w=1450" />
        //     </div>
        // </div>
        // <div className="row">
        // <div className="col-lg-4 col-sm-6">
        //     <div className="thumbnail">
        //         <img src="https://images.unsplash.com/photo-1436262513933-a0b06755c784?dpr=2&fit=crop&fm=jpg&h=825&q=50&w=1450" />
        //     </div>
        // </div>
        // <div className="col-lg-4 col-sm-6">
        //     <div className="thumbnail">
        //         <img src="https://images.unsplash.com/photo-1439396087961-98bc12c21176?dpr=2&fit=crop&fm=jpg&h=825&q=50&w=1450" />
        //     </div>
        // </div>
        // <div className="col-lg-4 col-sm-6">
        //     <div className="thumbnail">
        //         <img src="https://images.unsplash.com/photo-1439694458393-78ecf14da7f9?dpr=2&fit=crop&fm=jpg&h=825&q=50&w=1450" />
        //     </div>
        // </div>
        // </div>
        // </div>
        // </div>