import React, { Component } from 'react'
import PlayList from './PlayList'

class PlayListItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    // let key = 0
    console.log('hi')
    console.log(this.props.songs)
    console.log('there')
    // let songs = this.props.songs.map(song => {
    return (
      <div>
        {/* <h2>Hello from PlayListItems</h2> */}
        <div>
          <p>
            {/* {song.userName} */}
          </p>
        </div>
      </div>
    )
  }
}

// let key = 0
// let song = this.props.songs.map(song => {
//   key++

// <h2>Hello from PlayListItems</h2>
// <div>
//   <p>
//     {song.userName}
//   </p>
// </div>
// })

export default PlayListItem
