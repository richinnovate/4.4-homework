import React, { Component } from 'react'

class Gallery extends Component {
  handleClick = () => {
    this.props.navigate('page3')
  }
  render () {
    return     <div className="container">
            <div className="header">
              <h1>My Album</h1>
            </div>

            <div className="Aside">
              <button onClick={this.clickHandler} name="Album1">Album1</button>
              <button onClick={this.clickHandler} name="Album2">Album2</button>
              <button onClick={this.clickHandler} name="Album3">Album3</button>
              <button onClick={this.clickHandler} name="Album4">Album4</button>
              <button onClick={this.clickHandler} name="Album5">Album5e</button>
              <button onClick={this.clickHandler} name="Album6">Album6</button>
            </div>


            <div className="Pictures">
              <div className="Picture Picture1">
                <p onClick={this.handleClick}>Picture 1</p>
              </div>

              <div className="Picture Picture2">
                <p>Picture 2</p>
              </div>

              <div className="Picture Picture3">
                  <p>Picture 3</p>
              </div>

              <div className="Picture Picture4">
                  <p>Picture 4</p>
              </div>

              <div className="Picture Picture5">
                  <p>Picture 5</p>
              </div>

              <div className="Picture Picture6">
                  <p>Picture 6</p>
              </div>
            </div>
          </div>
}
}
export default Gallery
