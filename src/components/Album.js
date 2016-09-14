import React, { Component } from 'react'
import AlbumPreview from './AlbumPreview'
import data from './data2.json'

class Album extends Component {

  _goToGallery (index) {
    console.log('I want to go to gallery', index)
  }

  render () {
    const albums = data.galleries.map((gallery, index) => {
      console.log(gallery, index)
      return <AlbumPreview
        index={index}
        key={index}
        title={gallery.title}
        thumbnailUrl={gallery.thumbnailURL}
        goToGallery={this._goToGallery}
        navigate={this.props.navigate}
        />
    })
    console.log(albums[0].props.photo)
    return <div className='container'>
      <div className='header'>
        <h1>My Albums</h1>
      </div>

      <div className='Albums'>
        {albums}
      </div>

      <div className='footer'>
      <p>Copyright &copy; 2016 Lloyd Rich</p>
      </div>
    </div>
  }
}
export default Album
