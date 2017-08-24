import React, { Component } from 'react'

class PlayList extends Component {
  constructor(props) {
    super(props)

    this.state = {
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
        <h2>From PlayList</h2>
        {this.state.children}
      </div>
    )
  }
}

export default PlayList
