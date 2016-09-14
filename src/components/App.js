import React, { Component } from 'react'

class App extends Component {
render () {
  return <div className='App'>
      {this.props.children}
    </div>
}
}
App.propTypes = {
  children: React.PropTypes.object
}
export default App

// const albums = [
//   <AlbumPreview title='Finn and Jake' key={0} />,
//   <AlbumPreview title='Princesses' key={1} />
// ]
// const albums = data.galleries.map((gallery, index) => {
//   console.log(gallery, index)
//   return <AlbumPreview
//     index={index}
//     key={index}
//     title={gallery.title}
//     thumbnailUrl={gallery.thumbnailUrl}
//     goToGallery={this._goToGallery}
//     />
// })
// console.log(albums[0].props.photo)
// return <div className='container'>
//   <div className='header'>
//     <h1>My Album</h1>
//   </div>
//
//   <div className='Albums'>
//     {albums}
//   </div>
//
//   <div className='footer'>
//   <p>Copyright &copy; 2016 Lloyd Rich</p>
//   </div>
// </div>
