import React, { Component } from 'react'

class AlbumPreview extends Component {

  _handleClick = () => {
    this.props.goToGallery(this.props.index)
    this.props.navigate('page2')
  }

  render () {
    return <div
      className='Album'
      style={{backgroundImage: `url(${this.props.thumbnailUrl})`}}
      onClick={this._handleClick}>
      <p>{this.props.title}</p>
    </div>
  }
}

AlbumPreview.propTypes = {
  index: React.PropTypes.number.isRequired,
  title: React.PropTypes.string.isRequired,
  thumbnailUrl: React.PropTypes.string.isRequired,
  goToGallery: React.PropTypes.func.isRequired
}

export default AlbumPreview
