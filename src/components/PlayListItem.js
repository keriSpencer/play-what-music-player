import React, { Component } from 'react'
import PlayList from './PlayList'

class PlayListItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('hi')
    console.log(this.props.songs)
    console.log('there')

    let key = 0
    let songlist = this.props.songs.map(song => {
      key++
      return (
        <tbody key={key}>
          <tr>
            <td>
              {song.userName}
            </td>
            <td>
              {song.songArtist}
            </td>
            <td>
              {song.songTitle}
            </td>
            <td>
              {song.songNotes}
            </td>
          </tr>
        </tbody>
      )
    })
    return (
      <div>
        <div className="songsStyle">
          <h4>Songs</h4>
          <table className="table">
            <thead>
              <tr>
                <th>Username</th>
                <th>Artist</th>
                <th>Title</th>
                <th>Notes</th>
              </tr>
            </thead>
            {songlist}
          </table>
        </div>
      </div>
    )
  }
}

export default PlayListItem
