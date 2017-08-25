import React, { Component } from 'react'
import PlayListItem from '/Users/kerispencer/Development/react/play-what/src/components/PlayListItem.js'

class PlayList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      songs: [],
      userName: '',
      songNotes: '',
      songArtist: '',
      songTitle: ''
    }
  }

  componentDidMount() {
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting')
      .then(results => {
        return results.json()
      })
      .then(data => {
        this.setState({ songs: data })
        console.log('state', this.state.songs)
      })

    let fetchData = e => {
      e.preventDefault()
      fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting')
        .then(results => {
          return results.json()
        })
        .then(data => {
          this.setState({ songs: data })
        })
    }
  }

  render() {
    return (
      <div>
        <PlayListItem songs={this.state.songs} />
      </div>
    )
  }
}

export default PlayList
