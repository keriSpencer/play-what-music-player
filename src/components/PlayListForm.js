import React, { Component } from 'react'
import '/Users/kerispencer/Development/react/play-what/src/styles/App.css'

class PlayListForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userName: '',
      songNotes: '',
      songArtist: '',
      songTitle: ''
    }
  }

  addToList = e => {
    e.preventDefault()
    this.setState({
      userName: e.target.value,
      songTitle: e.target.value,
      songArtist: e.target.value,
      songNotes: e.target.value
    })
    let listItem = JSON.stringify(this.state)

    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting', {
      method: 'POST',
      body: listItem,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        console.log(response, 'yay')
      })
      .catch(err => {
        console.log(err, 'boo!')
      })
    this.setState({ userName: '', songNotes: '', songArtist: '', songTitle: '' })
  }

  render() {
    return (
      <div className="formWrap">
        <form className="form">
          <input name="name" placeholder="Name or User Name" />
          <input name="artist" placeholder="Artist or Band Name" />
          <input name="songTitle" placeholder="Song Title" />
          <textarea name="songNotes" />
          <div className="btn">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    )
  }
}

export default PlayListForm
